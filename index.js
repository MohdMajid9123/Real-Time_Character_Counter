//target textarea
const textareaEl = document.querySelector("#textarea");
//target total_counter
const total_counterEl = document.querySelector("#total_counter");
//target remain_counter
const remain_counterEl = document.querySelector("#remain_counter");

// inserValue

//textarea function code

textareaEl.addEventListener("keyup", () => {
  //check input length
  let TotalLength = textareaEl.value.length;
  //total counter
  total_counterEl.innerText = TotalLength;

  //remaining counter
  remain_counterEl.innerText = 150 - TotalLength;
});

// copyText

const copyText = () => {
  //input value is selected
  textareaEl.select();
  //maximam length
  textareaEl.setSelectionRange(0, 9999);
  //copy the text
  navigator.clipboard.writeText(textareaEl.value);
};
