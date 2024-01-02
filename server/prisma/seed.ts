import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const mockVoteItems: Prisma.VoteCreateInput[] = [
  {
    id: '29e1c976-4fff-4df0-bf63-ff4c5e681663',
    title: 'Aquaman and the Lost Kingdom',
    photoUrl: `https://m.media-amazon.com/images/M/MV5BMTkxM2FiYjctYjliYy00NjY2LWFmOTEtMWZiYWRjNjA4MGYxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,0,380,562_.jpg`,
    description: `Black Manta seeks revenge on Aquaman for his father's death. Wielding the Black Trident's power, he becomes a formidable foe. To defend Atlantis, Aquaman forges an alliance with his imprisoned brother. They must protect the kingdom.`,
    voteNumber: 0,
  },
  {
    id: '08d5beea-751e-4477-a4bb-f64b964d4eaf',
    title: 'Wonka',
    photoUrl: `https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZDJhMi00MmFmLTliMzEtN2RkZDY2OTNiMDgzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UY562_CR35,0,380,562_.jpg`,
    description: `With dreams of opening a shop in a city renowned for its chocolate, a young and poor Willy Wonka discovers that the industry is run by a cartel of greedy chocolatiers.`,
    voteNumber: 0,
  },
  {
    id: 'bd332d04-4704-4d99-af3e-17d1c3a59329',
    title: 'Migration',
    photoUrl: `https://m.media-amazon.com/images/M/MV5BYTIxZDM5YWItM2Y1My00ODg5LTkzNjAtMWFlZTNlODg0MzEyXkEyXkFqcGdeQXVyMTA5ODEyNTc5._V1_QL75_UX380_CR0,4,380,562_.jpg`,
    description: `A family of ducks try to convince their overprotective father to go on the vacation of a lifetime.`,
    voteNumber: 0,
  },
  {
    id: 'f92f4f67-53a8-4f88-adf8-43dcac45d2fa',
    title: 'The Hunger Games: The Ballad of Songbirds & Snakes',
    photoUrl: `https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_QL75_UX380_CR0,12,380,562_.jpg`,
    description: `Coriolanus Snow mentors and develops feelings for the female District 12 tribute during the 10th Hunger Games.`,
    voteNumber: 0,
  },
  {
    id: '7e36e524-38eb-4850-9279-3d9b22284c20',
    title: 'Kimitachi wa dô ikiru ka',
    photoUrl: `https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UY562_CR2,0,380,562_.jpg`,
    description: `A young boy named Mahito yearning for his mother ventures into a world shared by the living and the dead. There, death comes to an end, and life finds a new beginning. A semi-autobiographical fantasy from the mind of Hayao Miyazaki.`,
    voteNumber: 0,
  },
];

const mockUser: Prisma.UserCreateInput[] = [
  {
    id: '5b829102-4f89-4cfd-bb03-68ecf0614629',
    name: 'Test',
    email: 'test@mail.com',
    password: '$2b$10$5umgtfS.D065DAug6xIVOO07bEvez/iAuvvvvfXnUmzrwMhL2c.jm',
    role: 'USER',
  },
];

async function main() {
  for (const item of mockVoteItems) {
    await prisma.vote.upsert({
      where: { id: item.id },
      create: item,
      update: item,
    });
  }

  for (const item of mockUser) {
    await prisma.user.upsert({
      where: { id: item.id },
      create: item,
      update: item,
    });
  }

  console.log('seed successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
