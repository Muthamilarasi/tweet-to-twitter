const inquirer = require("inquirer");
const ora = require("ora");
const Twit = require("twit");

const T = new Twit({
  consumer_key: "jkrjckCl0h8Dql0J0u0o27i5b",
  consumer_secret: "8HuSO6T91rvjeqw0XdMiFvGvefi7r7fD1QNsm09ATfLbumo613",
  access_token: "1204311176-Vcz1VQbPdZpzZmfkgXQ7WQyKJ3tw3TwnnT2TBQZ",
  access_token_secret: "IxbQwk4Ujshwu6NHsXRp97Y1vjffwCChMR4XzC7VFrR9x"
});

const questions = [
  {
    type: "input",
    name: "message",
    message: "What u want tweet ?"
  }
];

inquirer.prompt(questions).then(answers => {
  const spinner = ora("tweet start").start();
  T.post("statuses/update", { status: answers["message"] }, function(
    err,
    data,
    res
  ) {
    console.log(data);
    spinner.stop();
  });
});
