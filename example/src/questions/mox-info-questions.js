export const data = {
    questions: [
        {
            sectionId: 's1',
            id: 's1q1',
            label: 'What is the name of the company?',
            type: 'text',
            nextQuestion: 's1q2'
        },
        {
            sectionId: 's1',
            id: 's1q2',
            label: 'What is the address of the company?',
            type: 'multiple',
            nextQuestion: 's1q3',
            prevQuestion: 's1q1',
            fields: [
                {
                    label: 'Address',
                    type: 'text'
                },
                {
                    label: 'City',
                    type: 'text'
                },
                {
                    label: 'State',
                    type: 'text',
                },
                {
                    label: 'ZIP code',
                    type: 'text',
                }
            ]
        },{
            sectionId: 's1',
            id: 's1q1',
            label: '',
            type: '',
            nextQuestion: ''
        },{
            sectionId: 's1',
            id: 's1q1',
            label: '',
            type: '',
            nextQuestion: ''
        },{
            sectionId: 's1',
            id: 's1q1',
            label: '',
            type: '',
            nextQuestion: ''
        },{
            sectionId: 's1',
            id: 's1q1',
            label: '',
            type: '',
            nextQuestion: ''
        },
    ]
}