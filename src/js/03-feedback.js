import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
// console.log(email);
const message = document.querySelector('[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const feedbackFormData = {};

message.addEventListener('input', throttle(onMessageInput, 500));
// feedbackForm.addEventListener('input', throttle(onMessageInput, 500));
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

populateFeedbackForm();

function onMessageInput(event) {
    // event.preventDefault();
    const formData = new FormData(feedbackForm);
    formData.forEach((value, name) => feedbackFormData[name] = value);
    // console.log(feedbackFormData);

    try {
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormData));
  } catch (error) {
    console.log("Set state error: ", error.message);
  }
    
};

function populateFeedbackForm() {
     try {
    let localStorageData = (localStorage.getItem(LOCALSTORAGE_KEY));
    if (localStorageData === null ? undefined : JSON.parse(localStorageData)) {
        Object.entries(localStorageData).forEach(([name, value]) => {
            feedbackForm.elements[name].value = value;
        })
    }
  } catch (error) {
    console.log("Set state error: ", error.message);
  }
    
};

function onFeedbackFormSubmit(event) {
  event.preventDefault();

  console.log(feedbackFormData);

  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
};

