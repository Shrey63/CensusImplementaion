
    var f=0;

    function submit_fun() { 

        null_textfield('t1');
        my_fun('type');
       null_textfield('living');
       null_textfield('t5');
       null_textfield('t6')
       null_textfield('t7');
       null_textfield('t8');
       null_textfield('t9');
       null_textfield('t10');
       null_textfield('t11');
       null_textfield('t12');

  if((document.getElementById('a1').checked)==false && (document.getElementById('a2').checked)==false) {   
                  document.getElementById("myd1").innerHTML="Select a value";
                      document.getElementById("myd1").style.color="Red"; 
                     // document.getElementById("myd1").style.font-family : small; 

                    }  
                      if((document.getElementById('a1').checked)==true|| (document.getElementById('a2').checked)==true) 
                      document.getElementById("myd1").innerHTML="";
                      // } 
  
             
                 if((document.getElementById('b1').checked)==false && (document.getElementById('b2').checked)==false) {   
                  document.getElementById("myd2").innerHTML="Select a value";
                      document.getElementById("myd2").style.color="Red";   
                  } 
  
                if((document.getElementById('b1').checked)==true|| (document.getElementById('b2').checked)==true) 
                      document.getElementById("myd2").innerHTML="";
             
                if((document.getElementById('c1').checked)==false && (document.getElementById('c2').checked)==false) {   
                  document.getElementById("myd3").innerHTML="Select a value";
                      document.getElementById("myd3").style.color="Red";   
                } 
                if((document.getElementById('c1').checked)==true|| (document.getElementById('c2').checked)==true) 
                      document.getElementById("myd3").innerHTML="";
  
    
             
                if((document.getElementById('d1').checked)==false && (document.getElementById('d2').checked)==false) {   
                  document.getElementById("myd4").innerHTML="Select a value";
                      document.getElementById("myd4").style.color="Red";   
                } 
                if((document.getElementById('d1').checked)==true|| (document.getElementById('d2').checked)==true) 
                      document.getElementById("myd4").innerHTML="";
              
              
                if((document.getElementById('e1').checked)==false && (document.getElementById('e2').checked)==false) {   
                  document.getElementById("myd5").innerHTML="Select a value";
                      document.getElementById("myd5").style.color="Red";  
                } 
                if((document.getElementById('e1').checked)==true|| (document.getElementById('e2').checked)==true) 
                      document.getElementById("myd5").innerHTML="";
              
              
                if((document.getElementById('f1').checked)==false && (document.getElementById('f2').checked)==false) {   
                  document.getElementById("myd6").innerHTML="Select a value";
                      document.getElementById("myd6").style.color="Red"; 
                } 
                if((document.getElementById('f1').checked)==true|| (document.getElementById('f2').checked)==true) 
                      document.getElementById("myd6").innerHTML="";
              
            
                if((document.getElementById('g1').checked)==false && (document.getElementById('g2').checked)==false) {   
                  document.getElementById("myd7").innerHTML="Select a value";
                      document.getElementById("myd7").style.color="Red"; 
                }
                if((document.getElementById('g1').checked)==true|| (document.getElementById('g2').checked)==true) 
                      document.getElementById("myd7").innerHTML="";
  
                      
                      
                      var str=document.getElementById("fuel").value;
                      if(document.getElementById("fuel").disabled==false)
                      {
                         if(str.length <=0){
                      document.getElementById("listdiv2").innerHTML="Select a value";
                      document.getElementById("listdiv2").style.color="Red";    
                        }
                    }
                    else
                    document.getElementById("myd2").innerHTML="";
                    
  
                  var str2=document.getElementById("cereal").value;
                  if(str2.length <=0){
                      document.getElementById("listdiv1").innerHTML="Select a value";
                      document.getElementById("listdiv1").style.color="Red";    
                  }
                  



                  var m_g=document.getElementsByClassName("strg1");
              
                  var m_name2=document.getElementsByClassName("m_name");
                  var m_age2=document.getElementsByClassName("m_age"); 
                  var m_g1=document.getElementsByClassName("strg2");
                  var m_occup2=document.getElementsByClassName("m_occup");
                  var new_div4=document.getElementsByClassName("m_div4");  
                  var new_div1=document.getElementsByClassName("m_div1"); 
                  var new_div2=document.getElementsByClassName("m_div2"); 
                  var new_div3=document.getElementsByClassName("m_div3"); 
               for(var e=0;e<f;e++)
               {
                  var x = m_occup2[e].value;
                  if (m_occup2[e].value == "" || m_occup2[e].value <= 0 ||m_occup2[e].value>0) 
                  { 
                    new_div4[e].innerHTML="Enter occupation";
                    new_div4[e].style.color="Red";       
                   }                   
                  else
                  {
                   new_div4[e].innerHTML="";
                  }

                var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
                var name =m_name2[e].value;
                if(!regName.test(name))
                {                    
                  new_div1[e].innerHTML="Enter valid name";
                  new_div1[e].style.color="Red";                                                                            
                }                   
               else
               {
                 new_div1[e].innerHTML="";
               }

              
                if(parseInt(m_age2[e].value)>1000||(m_age2[e].value)=="")
                {
                 new_div2[e].innerHTML="Enter valid age";
                 new_div2[e].style.color="Red"; 
                }
                else
              {
                new_div2[e].innerHTML="";
              }

             if((m_g[e].checked==false && m_g1[e].checked==false))
             {
              new_div3[e].innerHTML="Select Gender";
              new_div3[e].style.color="Red";
             }
             else
             {
               new_div3[e].innerHTML="";
             }
           }

           if((document.getElementById('z1').checked)==false && (document.getElementById('z2').checked)==false && (document.getElementById('z3').checked)==false) {   
            document.getElementById("z111").innerHTML="Select a value";
                document.getElementById("z111").style.color="Red";   
            } 
          if((document.getElementById('z1').checked)==true|| (document.getElementById('z2').checked)==true || (document.getElementById('z3').checked)==true) 
                document.getElementById("z111").innerHTML="";

             if((document.getElementById('zz1').checked)==false && (document.getElementById('zz2').checked)==false ) {   
                document.getElementById("zz111").innerHTML="Select a value";
                    document.getElementById("zz111").style.color="Red";   
                } 
             if((document.getElementById('zz1').checked)==true|| (document.getElementById('zz2').checked)==true ) 
                        document.getElementById("zz111").innerHTML="";

                        if((document.getElementById('zzz1').checked)==false && (document.getElementById('zzz2').checked)==false ) {   
                            document.getElementById("zzz111").innerHTML="Select a value";
                                document.getElementById("zzz111").style.color="Red";   
                            } 
                         if((document.getElementById('zzz1').checked)==true|| (document.getElementById('zzz2').checked)==true ) 
                                    document.getElementById("zzz111").innerHTML="";

      }


      function null_textfield(k) 
      {
          if(k=="t1")
          {
             
              var x = document.getElementById("t1").value;
              if (x == "") 
              {
                  document.getElementById("housediv1").innerHTML="Enter a house no.";
                  document.getElementById("housediv1").style.color="red";            
              }
            //   else if (x <= 0) 
            //   {
            //       document.getElementById("housediv1").innerHTML="Enter a value";
            //       document.getElementById("housediv1").style.color="crimson";            
            //   }
              else
              {
                  document.getElementById("housediv1").innerHTML=" ";
              }   
          }

          if(k=="living")
          {
              var x = document.getElementById("living").value;
               if (x == "" || x <= 0 || x>0)        //checks for pure number 
              {
                  document.getElementById("div3").innerHTML="Enter/Select a value";
                  document.getElementById("div3").style.color="Red";            
              }
              else
              {
                document.getElementById("div3").innerHTML=" ";
              }
          }

        //   if(k=="t4")
        //   {
        //       var x = document.getElementById("t4").value;
        //        if (x == "") 
        //       {
        //           document.getElementById("div4").innerHTML="Enter a value";
        //           document.getElementById("div4").style.color="Red";            
        //       }
        //       else  if(x<=0)
        //       {
        //           document.getElementById("div4").innerHTML="Enter a value";
        //           document.getElementById("div4").style.color="Red";            
        //       }
        //       else
        //       {
        //           document.getElementById("div4").innerHTML=" ";
        //       }
        //   }

          if(k=="t5")
        {
                 //   var x = document.getElementById("t5").value;
                    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
                    var name = document.getElementById("t5").value;
                    if(!regName.test(name))
                    {                    
                        document.getElementById("div5").innerHTML="Enter the name";
                        document.getElementById("div5").style.color="Red";                                                                            
                    }                   
                    else
                    {
                        document.getElementById("div5").innerHTML=" ";
                    }
                }


          if(k=="t6")
          {
            var regName = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
            var name = document.getElementById("t6").value;
            if(!regName.test(name))
            {                    
                document.getElementById("div6").innerHTML="Enter phone number";
                document.getElementById("div6").style.color="Red";                                                                            
            }                   
            else
            {
                document.getElementById("div6").innerHTML=" ";
            }
   
          }

          if(k=="t7")
          {
              var x = document.getElementById("t7").value;
               if (x == "" || x <= 0 || x>0) 
              {
                  document.getElementById("div7").innerHTML="Enter the caste";
                  document.getElementById("div7").style.color="Red";            
              }
              else if (x <= 0) 
              {
                  document.getElementById("div7").innerHTML="Enter a value";
                  document.getElementById("div7").style.color="Red";            
              }
              else
              {
                  document.getElementById("div7").innerHTML=" ";
              }
          }

          if(k=="t9")
          {
              var x = document.getElementById("t9").value;
               if (x == "") 
              {
                  document.getElementById("div9").innerHTML="Enter no. of rooms";
                  document.getElementById("div9").style.color="Red";            
              }
            else if(x<=0)
              {
                  document.getElementById("div9").innerHTML="Enter no. of rooms";
                  document.getElementById("div9").style.color="Red";            
              }
              else
              {
                  document.getElementById("div9").innerHTML=" ";
              }
          }

          if(k=="t10")
          {
              var x = document.getElementById("t10").value;
               if (x == "") 
              {
                  document.getElementById("div10").innerHTML="Enter no. of married couples";
                  document.getElementById("div10").style.color="Red";            
              }
             else  if(x<=0)
              {
                  document.getElementById("div10").innerHTML="Enter no. of married couples";
                  document.getElementById("div10").style.color="Red";            
              }
              else
              {
                  document.getElementById("div10").innerHTML=" ";
              }
          }
          if(k=="t11")
          {
              var x = document.getElementById("t11").value;
               if (x == "" || x <= 0 || x>0) 
              {
                  document.getElementById("div11").innerHTML="Select the value";
                  document.getElementById("div11").style.color="Red";            
              }
              else
              {
                  document.getElementById("div11").innerHTML=" ";
              }
          }
          if(k=="t12")
          {
              var x = document.getElementById("t12").value;
              if (x == "" || x <= 0 || x>0) 
              {
                  document.getElementById("div12").innerHTML="Select the value";
                  document.getElementById("div12").style.color="Red";            
              }                   
              else
              {
                  document.getElementById("div12").innerHTML=" ";
              }
          }
          if(k=="t8")
          {
              var x = document.getElementById("t8").value;
              if (x == "" || x <= 0 || x>0) 
              {
                  document.getElementById("div8").innerHTML="Enter the occupation";
                  document.getElementById("div8").style.color="Red";            
              }                   
              else
              {
                  document.getElementById("div8").innerHTML=" ";
              }
          }
          
      }

      function my_fun( i)
      {
          if(i=="fuel")
          {
            
              var str=document.getElementById("fuel").value;
              if(str.length <=0)
              {
                  document.getElementById("listdiv2").innerHTML="Select a value";
                  document.getElementById("listdiv2").style.color="Red";    
              }
              else{
                  document.getElementById("listdiv2").innerHTML="";
                  }   
           }

          if(i=="type")
          {
            
              var str=document.getElementById("type").value;
              if(str.length <=0)
              {
                  document.getElementById("listdiv13").innerHTML="Select a value";
                  document.getElementById("listdiv13").style.color="Red";    
              }
              else
              {
                  document.getElementById("listdiv13").innerHTML="";
              }
          }    
      }
    
      function radio_click()
        {
               if((document.getElementById('a1').checked)==true|| (document.getElementById('a2').checked)==true) 
               document.getElementById("myd1").innerHTML="";
              
               if((document.getElementById('b1').checked)==true|| (document.getElementById('b2').checked)==true) 
               document.getElementById("myd2").innerHTML="";

               if((document.getElementById('b1').checked)==false && (document.getElementById('b2').checked)==true) {
               document.getElementById("fuel").disabled=true;
               document.getElementById("fuel").value="";           //making it null when disabled due to b1
               document.getElementById("listdiv2").innerHTML="";}

               if((document.getElementById('b1').checked)==true&& (document.getElementById('b2').checked)==false) {
                document.getElementById("fuel").disabled=false;
                document.getElementById("listdiv2").innerHTML="";}

                

               if((document.getElementById('c1').checked)==true|| (document.getElementById('c2').checked)==true) 
               document.getElementById("myd3").innerHTML="";

               if((document.getElementById('d1').checked)==true|| (document.getElementById('d2').checked)==true) 
                      document.getElementById("myd4").innerHTML="";

                 if((document.getElementById('e1').checked)==true|| (document.getElementById('e2').checked)==true) 
                  document.getElementById("myd5").innerHTML="";

                  if((document.getElementById('f1').checked)==true|| (document.getElementById('f2').checked)==true) 
                  document.getElementById("myd6").innerHTML="";

                  if((document.getElementById('g1').checked)==true|| (document.getElementById('g2').checked)==true) 
                  document.getElementById("myd7").innerHTML="";

                  if((document.getElementById('z1').checked)==true|| (document.getElementById('z2').checked)==true || (document.getElementById('z3').checked)==true) 
                  document.getElementById("z111").innerHTML="";

                  if((document.getElementById('zz1').checked)==true|| (document.getElementById('zz2').checked)==true || (document.getElementById('zz3').checked)==true) 
                  document.getElementById("zz111").innerHTML="";

                  if((document.getElementById('zzz1').checked)==true|| (document.getElementById('zzzz2').checked)==true || (document.getElementById('zzz3').checked)==true) 
                  document.getElementById("zzz111").innerHTML="";

        }


        function radio_group()
        {
          var m_g=document.getElementsByClassName("strg1");
          var m_g1=document.getElementsByClassName("strg2");
          for(var e=0;e<f;e++)
            {
              m_g[e].name="m_gender"+e;
              m_g1[e].name="m_gender"+e;
              
            }          
        }
              
        function list_valid(i)
             { 
              if(i=="fuel"){
                  var str=document.getElementById("fuel").value;
                  if(str.length <=0){
                      document.getElementById("listdiv2").innerHTML="Select a value";
                      document.getElementById("listdiv2").style.color="Red";    
                  }
                  else{
                      document.getElementById("listdiv2").innerHTML="";
                  }
              }
  
              if(i=="cereal"){
                  var str=document.getElementById("cereal").value;
                  if(str.length <=0){
                      document.getElementById("listdiv1").innerHTML="Select a value";
                      document.getElementById("listdiv1").style.color="Red";    
                  }
                  else{
                      document.getElementById("listdiv1").innerHTML="";
                  }
              }
            }
        function AddTextBox(x) {
          document.getElementById("TextBoxContainer").innerHTML="";
            f=x;
          for(i=0;i<x;i++)
          {
            var div = document.createElement('DIV');
            div.innerHTML = "Enter name  <br>"+'<input class="form-control m_name"  name = "DynamicTextBox"  type="text" />'+
            '<div class="m_div1" style="font-size: small; font-family: Georgia; "></div>'+
            "<br>Enter age <br>"+'<input type="number" class="form-control m_age min="1" max="100"" name="myn">'+
            '<div class="m_div2" style="font-size: small; font-family: Georgia; "></div>'+
            "<br>Enter gender:&nbsp&nbsp&nbsp   "+"<input type='radio' class='strg1'  name=str onclick='radio_group()' >Yes"+
            "&nbsp&nbsp<input type='radio'class='strg2'  id='str2' onclick='radio_group()' name=str value='NO'>No"+
            '<div class="m_div3" style="font-size: small; font-family: Georgia; "></div>'+
            "<br>Enter occupation <br>"+'<input type="text" class="form-control m_occup"  name="headoccupation">'+
            '<div class="m_div4" style="font-size: small; font-family: Georgia; "></div>'+'<BR><BR><BR>';
            document.getElementById("TextBoxContainer").appendChild(div);
          }
         }

    //      function RemoveTextBox(div) { 
    //   }
         
        
        