$(function() {

    $(".progress").each(function() {
  
      var value = $(this).attr('data-value');
      var left = $(this).find('.progress-left .progress-bar');
      var right = $(this).find('.progress-right .progress-bar');
  
      if (value > 0) {
        if (value <= 50) {
          right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
        } else {
          right.css('transform', 'rotate(180deg)')
          left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
        }
      }
  
    })
  
    function percentageToDegrees(percentage) {
  
      return percentage / 100 * 360
  
    }
  
  });

  // add skill

  let skillText = document.getElementById('skillText');
  let addSkill = document.getElementById('addSkill');
  let skills = document.getElementById('skills');

  addSkill.addEventListener('click' , function () {
    const p = document.createElement("p");
    p.innerText = skillText.value;
    skills.appendChild(p);
  })