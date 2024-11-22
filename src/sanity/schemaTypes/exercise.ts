export default {
  name: 'exercise',
  title: 'Exercise',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Conditioning', value: 'conditioning' },
          { title: 'Restorative', value: 'restorative' },
          { title: 'Joint Mobility', value: 'jointMobility' },
          { title: 'Cardio', value: 'cardio' },
          { title: 'Upper Body Strength', value: 'upperBodyStrength' },
          { title: 'Lower Body Strength', value: 'lowerBodyStrength' },
          { title: 'Core', value: 'core' },
        ],
      },
    },
  ],
}
