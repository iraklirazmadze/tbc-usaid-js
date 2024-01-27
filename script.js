
function generateCourseCard(title, imgSrc) {
  const courseCard = document.createElement('div');
  courseCard.className = 'course-card-item';
  const img = document.createElement('img');
  img.src = imgSrc;
  img.alt = `${title} Image`;
  
  const titleDiv = document.createElement('div');
  titleDiv.className = 'card-title';
  titleDiv.textContent = title;

  const registration = document.createElement('div');
  registration.className = 'registration';
  registration.textContent = 'რეგისტრაცია დასრულებულია';
  
  const courseDetails = document.createElement('div');
  courseDetails.className = 'course-details';
  
  const arrowImg = document.createElement('img');
  arrowImg.src = 'images/arrow.svg';
  arrowImg.alt = 'Arrow';
  
  const paragraph = document.createElement('div');
  paragraph.className = 'paragraph';
  paragraph.textContent = 'კურსის დეტალები';
  
  courseDetails.appendChild(arrowImg);
  courseDetails.appendChild(paragraph);
  
  courseCard.appendChild(img);
  courseCard.appendChild(titleDiv);
  courseCard.appendChild(registration);
  courseCard.appendChild(courseDetails);
  
  document.getElementById('courseContainer').appendChild(courseCard);
}

generateCourseCard('IOS Development', "images/Ios.webp");
generateCourseCard('React', "images/React.webp");
generateCourseCard('Intro to Python', "images/python.webp");
generateCourseCard('Advanced Python', "images/advanced-python.webp");
generateCourseCard('Advanced Cybersecurity Course', "images/cybersecurity.webp");
generateCourseCard('ToT - Training of Trainers', "images/tot.webp");
generateCourseCard('Blockchain', "images/blockchain.webp");
generateCourseCard('DevOps', "images/devops.webp");
generateCourseCard('Information Security Governance', "images/informationSecurity.webp");






const screenWidth = window.innerWidth;
const logosContainer = document.getElementById('logosContainer');
const imgs = ['images/usaid-xalxi.webp', 'images/space.webp', 'images/tineti.webp', 'images/tegeta.webp', 'images/pectre.webp', 'images/lizing.webp', 'images/ufc.webp'];
let num;

if (screenWidth < 750) {
  num = [1];
} else if (screenWidth >= 750 && screenWidth < 1100) {
  num = [1, 2];
} else {
  num = [1, 2, 3];
}


function renderLogos() {
  logosContainer.innerHTML = '';
  num.forEach((item) => {
  const logo = document.createElement('img');
  logo.className = 'parthners-logo';
  logo.src = imgs[item - 1];
  logo.alt = `Logo ${item}`;
  logosContainer.appendChild(logo);
  });
}
renderLogos();

function handleClickNext() {
 if (screenWidth < 750) {
  num = (num[0] === 7) ? [1] : [num[0] + 1];
 } else if (screenWidth >= 750 && screenWidth < 1100) {
  num = (num[0] === 1) ? [3, 4] : (num[0] === 3) ? [5, 6] : (num[0] === 5) ? [7] : [1, 2];
 } else {
  num = (num[0] === 1) ? [4, 5, 6] : (num[0] === 7) ? [1, 2, 3] : [7];
 }

 renderLogos();
 }

 function handleClickPrev() {
 if (screenWidth < 750) {
  num = (num[0] === 1) ? [7] : [num[0] - 1];
 } else if (screenWidth >= 750 && screenWidth < 1100) {
  num = (num[0] === 1) ? [7] : (num[0] === 3) ? [1, 2] : (num[0] === 5) ? [3, 4] : [5, 6];
 } else {
  num = (num[0] === 1) ? [7] : (num[0] === 7) ? [4, 5, 6] : [1, 2, 3];
 }
 renderLogos();
}



let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    handleClickNext();
  }, 3000); 
}

function stopTimer() {
  clearInterval(timerInterval); 
}
startTimer();

const partnersBox = document.getElementById('parthnersBox');

partnersBox.addEventListener('mouseenter', () => {
  stopTimer(); 
});

partnersBox.addEventListener('mouseleave', () => {
  startTimer(); 
});






document.addEventListener("DOMContentLoaded", function () {
const appElement = document.getElementById("questionsApp");

function Questions() {
  const questionsData = [
    ["როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?","კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი: \n I ეტაპი - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.\n II ეტაპი - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.\n III ეტაპი - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.\nIV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.\n* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა. "
  ],
  ["შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?","TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე."
  ],
  ["რა ღირს სწავლა პროგრამის ფარგლებში?","პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ."]
  ];

      let visibleAnswerIndex = null;

      function handleClick(index) {
          if (visibleAnswerIndex === index) {
              visibleAnswerIndex = null;
          } else {
              visibleAnswerIndex = index;
          }
          renderQuestions();
      }

      function renderQuestions() {
          const questionsBox = document.querySelector('.questions-box');
          questionsBox.innerHTML = '';

          questionsData.forEach((item, index) => {
              const questionAndAnswer = document.createElement('div');
              questionAndAnswer.className = 'question-and-answer';

              const questionAndArrow = document.createElement('div');
              questionAndArrow.className = 'question-and-arrow';
              questionAndArrow.addEventListener('click', () => handleClick(index));

              const question = document.createElement('div');
              question.className = 'question';
              question.textContent = item[0];

              const arrow = document.createElement('img');
              arrow.className = 'arrow';
              arrow.src = visibleAnswerIndex === index ? 'images/186407_arrow_up_icon.png' : 'images/white-arrow-png-41944.png';
              arrow.alt = 'Arrow';

              questionAndArrow.appendChild(question);
              questionAndArrow.appendChild(arrow);

              const answer = document.createElement('div');
              answer.className = 'answer';
              answer.textContent = item[1];
              answer.style.display = visibleAnswerIndex === index ? 'block' : 'none';

              questionAndAnswer.appendChild(questionAndArrow);
              questionAndAnswer.appendChild(answer);

              questionsBox.appendChild(questionAndAnswer);
          });
      }

      return {
          render: renderQuestions,
      };
  }

  const questionsApp = Questions();
  questionsApp.render();
});