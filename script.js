const data = [
    {
        text: 'At Interconcepts Microfinance, we offer financial advice to loan beneficiaries and also counsel them on Loan repayment processes before helping them in accessing the loan with little colateral. Come and do business with us and be financially stable.',
        avatar: false,
        name_X_title: 'Tayo Olakunle -- UX Designer'
    },
    {
        text: 'At Interconcepts Microfinance, we offer financial advice to loan beneficiaries and also counsel them on Loan repayment processes before helping them in accessing the loan with little colateral. Come and do business with us and be financially stable.',
        avatar: false,
        name_X_title: 'Tayo Olakunle -- UX Designer'
    },
    {
        text: 'At Interconcepts Microfinance, we offer financial advice to loan beneficiaries and also counsel them on Loan repayment processes before helping them in accessing the loan with little colateral. Come and do business with us and be financially stable.',
        avatar: false,
        name_X_title: 'Tayo Olakunle -- UX Designer'
    },
    {
        text: 'At Interconcepts Microfinance, we offer financial advice to loan beneficiaries and also counsel them on Loan repayment processes before helping them in accessing the loan with little colateral. Come and do business with us and be financially stable.',
        avatar: false,
        name_X_title: 'Tayo Olakunle -- UX Designer'
    },
    {
        text: 'At  Microfinance, we offer financial advice to loan beneficiaries and also counsel them on Loan repayment processes before helping them in accessing the loan with little colateral. Come and do business with us and be financially stable.',
        avatar: true,
        name_X_title: 'Tayo Olakunle -- UX Designer'
    },
    {
        text: 'At Interconcepts , we offer financial advice to loan beneficiaries and also counsel them on Loan repayment processes before helping them in accessing the loan with little colateral. Come and do business with us and be financially stable.',
        avatar: true,
        name_X_title: 'Tayo Olakunle -- UX Designer'
    },
    {
        text: 'At Interconcepts Microfinance, we offer financial advice to loan beneficiaries and also counsel them on Loan repayment processes before helping them in accessing the loan with little colateral. Come and do business with us and be financially stable.',
        avatar: true,
        name_X_title: 'Tayo Olakunle -- UX Designer'
    },
    {
        text: 'At  Microfinance, we offer financial advice to loan beneficiaries and also counsel them on Loan repayment processes before helping them in accessing the loan with little colateral. Come and do business with us and be financially stable.',
        avatar: true,
        name_X_title: 'Tayo Olakunle -- UX Designer'
    },
]




class Pagination  {
    constructor(data){
        this.currentPage = 1;
        this.postsPerPage = 4;
        this.indexOfLastPost = this.currentPage * this.postsPerPage;
        this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
        this.currentPosts = data.slice(this.indexOfFirstPost, this.indexOfLastPost);
        this.totalPosts = data.length;
        this.pageNumbers = [];
    }
        populate () {
            let testimonials = this.currentPosts.map(data => (
                `<div class='testimonial'>
                    <p>${data.text}</>
                    <div class='bottom'> 
                    ${data.avatar ? `<img class='avatar' src='' alt='avatar' />` : `<div class='circle'></div>`}
                    <p>${data.name_X_title}</p>
                    </div>
                </div>`
            ))

            document.querySelector('.testimonials').innerHTML = testimonials.join('');
        }

        numerate () {
            for (let i = 1; i <= Math.ceil(this.totalPosts / this.postsPerPage); i++) {
                this.pageNumbers.push(i);
            }

            let pagesNums =  `
                                <li class='pagination_item arrow<<'>&laquo;</li>
                                ${
                                    this.pageNumbers.map( num =>(
                                        `
                                        <li class='pagination_item'>${num}</li>
                                        `
                                    )).join('')
                                }
                                <li class='pagination_item arrow>>'>&raquo;</li>
                            `                             
            
                            document.querySelector('.controls').innerHTML = pagesNums;
        }

        paginate (e) {
            if (e.target.classList.contains('arrow<<')) {

                this.currentPage === 1 ?  this.currentPage = this.pageNumbers.length : this.currentPage = --this.currentPage

                console.log(this.currentPage,this.currentPosts)
            }
        }
}

(
    () => {
        // let currentPage = 1;
        // let postPerPage = 4;
        // let indexOfLastPost = currentPage * postsPerPage;
        // let indexOfFirstPost = indexOfLastPost - postsPerPage;
        // let currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
        // let pageNumbers = [];
        const pagination = new Pagination(data)
        pagination.populate()
        pagination.numerate()

        document.addEventListener('click', pagination.paginate)
    }
)()

// document.addEventListener('DOMContentLoaded',()=> {

// })