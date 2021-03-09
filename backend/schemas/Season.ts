import { select } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const Season = list({
  fields: {
    year: select({
      options: [
        { label: '2020', value: '2020' },
        { label: '2019', value: '2019' },
        { label: '2018', value: '2018' },
      ],
      isUnique: true,
      isRequired: true,
      ui: {
        displayMode: 'select',
      },
    }),
  },
});

export { Season };
