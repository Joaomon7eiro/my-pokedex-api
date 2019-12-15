module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'types',
      [
        {
          id: 1,
          name: 'normal',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'fighting',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'flying',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'poison',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: 'ground',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: 'rock',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          name: 'bug',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          name: 'ghost',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          name: 'steel',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          name: 'fire',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 11,
          name: 'water',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 12,
          name: 'grass',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
          name: 'electric',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 14,
          name: 'psychic',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 15,
          name: 'ice',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 16,
          name: 'dragon',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 17,
          name: 'dark',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 18,
          name: 'fairy',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10001,
          name: 'unknown',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10002,
          name: 'shadow',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
