fetch('data/questions.json')
  .then(response => response.json())
  .then(data => {
    // נציג את השאלות והתשובות באתר
    displayQuestionsAndAnswers(data);
  })
  .catch(error => {
    console.error('Error loading questions and answers:', error);
  });

function displayQuestionsAndAnswers(qaData) {
  const questionsContainer = document.getElementById('questions-container');
   
  qaData.forEach(item => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
      <h3>${item.question}</h3>
      <div class="answers"></div>
    `;
    
    const answersContainer = questionElement.querySelector('.answers');
    item.answers.forEach(answer => {
      const answerElement = document.createElement('p');
      answerElement.textContent = answer.text;
      answersContainer.appendChild(answerElement);
    });
    
    questionsContainer.appendChild(questionElement);
  });
}