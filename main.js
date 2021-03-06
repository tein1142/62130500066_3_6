const constraints = {
    // firstname: {
    //     presence: true,
    // },
    // lastname: {
    //     presence: true,
    // },
    // age: {
    //     presence: true,
    //     numericality: {
    //         lessThan: 100
    //     }
    // },
    // gender: {
    //     presence: true,
    // },
    // email: {
    //     presence: true,
    //     email: true
    // },
    // phone: {
    //     presence: true,
    //     length: {
    //         minimum: 10,
    //         message: "must be at least 10 digits"
    //     },
    // },
    // chosensubject: {
    //     presence: true
    // }

    firstname: {
        length: {
            minimum: 5,
            maximum: 30
        },
        presence: true,

    },
    lastname: {
        length: {
            minimum: 1,
            maximum: 30
        },
        presence: true
    },
    career: {
        length: {
            minimum: 1,
            maximum: 30
        },
        presence: true
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "You must be at least 10 digits"
        },
    },
    chosenfaculty: {
        presence: true
    },






}

const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            imageURL: 'https://www.thairath.co.th/media/HCtHFA7ele6Q2dUNFWl3FcNz4RNw5xNneXhwHMrq7UTztYOpclwgiP2hGbfqBjI5m2.jpg',
            aticle: 'Article',
            follower: 'Followers',
            ratting: 'Ratings',
            chat: 'Chat',
            fname: null,
            lname: null,
            career: null,
            requires: null,
            phone: null,
            chosenfaculty: null,
            email: null,
            faculty_lists: [{
                    faculty_id: 1,
                    branch_name: "IT"
                },
                {
                    faculty_id: 2,
                    branch_name: "CS"
                },
                {
                    faculty_id: 3,
                    branch_name: "DSI"
                },
            ]
        }
    },
    methods: {
        checkProfile() {
            this.requires = validate({
                firstname: this.fname,
                lastname: this.lname,
                career: this.career,
                phone: this.phone,
                email: this.email,
                chosenfaculty: this.chosenfaculty
            }, constraints)


            if (!this.requires) {
                alert("Registered successfully.")
            }


        },

        showCareer() {
            if (this.career) {
                return career;

            }
        }

    }

}
Vue.createApp(app).mount('#app')