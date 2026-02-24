document.addEventListener("DOMContentLoaded", () => {

    const lessonCards = document.querySelectorAll(".lesson-card");
    lessonCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 200);
    });

    const progressCard = document.querySelector(".progress-card");
    if (progressCard) {
        setTimeout(() => {
            progressCard.classList.add("show");
        }, 200);
    }

    const stats = document.querySelectorAll(".stat-bubble");
    stats.forEach((stat, index) => {
        setTimeout(() => {
            stat.classList.add("show");
        }, 600 + index * 200);
    });

   const quiz = document.querySelector(".quiz-container");
    if (quiz) {
        setTimeout(() => {
            quiz.classList.add("show");
        }, 300); 
    }

    const bot = document.querySelector(".bot-container");
    if (bot) {
        setTimeout(() => {
            bot.classList.add("show");
        }, 600);
    }

    const messages = document.querySelectorAll(".msg");
    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.classList.add("show");
        }, 1000 + (index * 400)); 
    });

});