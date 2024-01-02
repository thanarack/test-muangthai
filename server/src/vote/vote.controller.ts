import {
  Controller,
  Post,
  Get,
  Body,
  UseInterceptors,
  Req,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import {
  VoteAddRequest,
  VoteRemoveRequest,
  VoteRequest,
  VoteSubmitRequest,
  VoteUpdateRequest,
} from 'src/interface/vote';
import { VoteService } from './vote.service';
import {
  ITokenInfo,
  TokenInterceptor,
} from 'src/interceptor/token.incetceptor';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post('submit')
  @UseInterceptors(TokenInterceptor)
  async vote(@Body() body: VoteSubmitRequest, @Req() req: any) {
    const userInfo: ITokenInfo = req.user_info;
    return this.voteService.VoteSubmit(body, userInfo);
  }

  @Get('list')
  @UseInterceptors(TokenInterceptor)
  async list(@Query() query: VoteRequest) {
    return this.voteService.getVoteList(query);
  }

  @Delete('remove')
  @UseInterceptors(TokenInterceptor)
  async remove(@Query() query: VoteRemoveRequest) {
    return this.voteService.removeVote(query);
  }

  @Post('add')
  @UseInterceptors(TokenInterceptor)
  async add(@Body() body: VoteAddRequest, @Req() req: any) {
    const userInfo: ITokenInfo = req.user_info;
    return this.voteService.addNewVote(body, userInfo);
  }

  @Patch('update')
  @UseInterceptors(TokenInterceptor)
  async update(@Body() body: VoteUpdateRequest) {
    return this.voteService.updateVote(body);
  }
}
