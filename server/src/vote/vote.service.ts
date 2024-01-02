import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ITokenInfo } from 'src/interceptor/token.incetceptor';
import {
  VoteAddRequest,
  VoteRemoveRequest,
  VoteRequest,
  VoteSubmitRequest,
  VoteUpdateRequest,
} from 'src/interface/vote';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VoteService {
  constructor(private readonly prisma: PrismaService) {}

  async VoteSubmit(body: VoteSubmitRequest, userInfo: ITokenInfo) {
    try {
      const voteCheck = await this.prisma.userVote.count({
        where: {
          userId: userInfo.user_id,
          voteId: body.voteId,
        },
      });
      if (voteCheck > 0) {
        throw new Error('Already voted');
      }

      let vote;
      await this.prisma.$transaction(async (tx) => {
        vote = await tx.userVote.create({
          data: {
            userId: userInfo.user_id,
            voteId: body.voteId,
          },
        });

        await tx.vote.update({
          where: {
            id: body.voteId,
          },
          data: {
            voteNumber: {
              increment: 1,
            },
          },
        });
      });

      return vote;
    } catch (e) {
      throw e;
    }
  }

  async getVoteList(query: VoteRequest) {
    let where: Prisma.VoteWhereInput = {
      deletedAt: {
        equals: null,
      },
    };

    if (query.search) {
      where = {
        ...where,
        AND: {
          OR: [
            {
              title: {
                contains: query.search.toLocaleLowerCase(),
                mode: 'insensitive',
              },
            },
            {
              description: {
                contains: query.search.toLocaleLowerCase(),
                mode: 'insensitive',
              },
            },
          ],
        },
      };
    }

    let orderBy: Prisma.VoteOrderByWithAggregationInput = {
      createdAt: 'desc',
    };

    const sort = +query.sort;
    if (sort === 1) {
      orderBy = {
        title: 'asc',
      };
    } else if (sort === 2) {
      orderBy = {
        title: 'desc',
      };
    } else if (sort === 3) {
      orderBy = {
        voteNumber: 'desc',
      };
    } else if (sort === 4) {
      orderBy = {
        voteNumber: 'asc',
      };
    }

    const result = await this.prisma.vote.findMany({
      where,
      take: 10,
      orderBy,
    });

    return result;
  }

  async removeVote(body: VoteRemoveRequest) {
    try {
      return this.prisma.vote.update({
        where: {
          id: body.voteId,
        },
        data: {
          deletedAt: new Date(),
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async addNewVote(body: VoteAddRequest, userInfo: ITokenInfo) {
    try {
      return this.prisma.vote.create({
        data: {
          title: body.title,
          description: body.description,
          photoUrl: body.photoUrl,
          voteNumber: 0,
          createdBy: userInfo.user_id,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async updateVote(body: VoteUpdateRequest) {
    try {
      return this.prisma.vote.update({
        where: {
          id: body.id,
        },
        data: {
          title: body.title,
          description: body.description,
          photoUrl: body.photoUrl,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}
