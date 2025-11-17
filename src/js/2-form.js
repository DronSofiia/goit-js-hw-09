const refs = {
    form: document.querySelector(".feedback-form"),
}
  

const saveInLs = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
};

const getFromLs = (key) => {
    const savedData = localStorage.getItem(key);
    if (savedData) {
      return  JSON.parse(savedData);
    } return null;
}


const FEEDBACK_FROM_FORM = "feedback-form-state";

 let formData = {
    email: "",
    message: "",    
};


const userFeedback = getFromLs(FEEDBACK_FROM_FORM);

if (userFeedback) {
    formData.email = userFeedback.email || "";
    formData.message = userFeedback.message || "";

    refs.form.elements.email.value = formData.email;
    refs.form.elements.message.value = formData.message;
}



refs.form.addEventListener("input", (e) => {
    const field = e.target.name;
    formData[field] = e.target.value.trim();
    saveInLs(FEEDBACK_FROM_FORM, formData)
}
   
)

refs.form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!formData.email || !formData.message) {
        return alert("Fill please all fields")
    }

    console.log(formData);
    formData.email = "";
    formData.message = "";
    refs.form.reset();
    localStorage.removeItem(FEEDBACK_FROM_FORM);

});


