
function startClassification()
 {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1AXt_CMgO/model.json', modelReady);
 }

 function modelReady()
 {
    classifier.classify(gotResults);
 }

 function gotResults(error, results)
 {
   if(error)
   {
      console.error(error);
   }
   else
   {
      console.log(results);
      r = Math.floor(Math.random() * 255) + 1;
      g = Math.floor(Math.random() * 255) + 1;
      b = Math.floor(Math.random() * 255) + 1;
      
      document.getElementById("result").innerHTML = "I can hear -" +
      results[0].label;
      document.getElementById("Accuracy").innerHTML = "Accuracy -" +
      (results[0].confidence * 100).toFixed(3) + "%";
      document.getElementById("result").style.color = "rgb(" + r + "," + g + "," + b + ")";
      document.getElementById("Accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")";

      img = document.getElementById('aliens1');
      img1 = document.getElementById('aliens2');
      img2 = document.getElementById('aliens3');
      img3 = document.getElementById('aliens4');
      
      if(results[0].label == "Clapping")
      {
         img.src = 'aliens-01.gif';
         img1.src = 'aliens-02.png';
         img2.src = 'aliens-03.png';
         img3.src = 'aliens-04.png';
      }
      else if(results[0].label == "Smacking")
      {
         img.src = 'aliens-01.png';
         img1.src = 'aliens-02.gif';
         img2.src = 'aliens-03.png';
         img3.src = 'aliens-04.png';
      }
      else if(results[0].label == "Plastic rubbing")
      {
         img.src = 'aliens-01.png';
         img1.src = 'aliens-02.png';
         img2.src = 'aliens-03.gif';
         img3.src = 'aliens-04.png';
      }
      else
      {
         img.src = 'aliens-01.png';
         img1.src = 'aliens-02.png';
         img2.src = 'aliens-03.png';
         img3.src = 'aliens-04.gif';
      }
   }


   }
 