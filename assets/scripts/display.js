'use strict';

const authApi = require('./auth/api');
const authUi = require('./auth/ui');

let displaySolutions = function(solutions){
  console.log(solutions);
    // $('.landing-div').hide(); //this hides the landing page div
    // $('.show-solutions').html(''); //this clears the content in my table html
  let solutionsListingTemplate = require('./templates/show-solutions.handlebars');
    $('.show-solutions').append(solutionsListingTemplate({
      solutions : solutions
    }));
    $('.edit-solution-btn').on('click', function (event) {
      event.preventDefault();
      $('.edit-solution-modal').modal('show');
      let solutionId = $(this).data('id');
      $('#edit-symptom').on('submit', function(event) {
        event.preventDefault();
        let newSolution = getFormFields(this);
        $('.edit-solution-modal').modal('hide');
        authApi.editSolution(authUi.editSolutionSuccess, authUi.failure, newSolution, solutionId);
      });
    });
    // $('.delete-solution-btn').on('click', function (event) {
    //   event.preventDefault();
    //   $('.delete-solution-modal').modal('show');
    //   let solutionId = $(this).data('id');
    //   $('#delete-symptom').on('submit', function(event) {
    //     event.preventDefault();
    //     let newSolution = getFormFields(this);
    //     $('.delete-solution-modal').modal('hide');
    //     authApi.editSolution(authUi.editSolutionSuccess, authUi.failure, newSolution, solutionId);
    //   });
    // });
};






module.exports = {
  displaySolutions,
};
