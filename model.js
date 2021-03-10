/**/ 

const model = {
    //pages: 0 = Login; 1= lage spørsmål; 2= svar spørsmål; 3= see svar
    page_id : 0,
    users: [
        {
            user_id : 1,
            username: 'admin',
            user_rights: 'admin', //admin = ask questions, user = only answer
            password: 'admin'
        },
    ],
    active_user : 0, // user_id of user that is currently logged in / 0= nobody signed in
    questions : [
        {
            question_text: "",
            answers : [
                {
                    answer_text: "AnswerA",
                    answer_counter: 0,
                    //answered_by: [user1, user2],
                },
                {
                    answer_text: "AnswerB",
                    answer_counter: 5
                },
            ],
            question_id : 1,

        },
    ],

}
