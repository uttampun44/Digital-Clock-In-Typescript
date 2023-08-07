let show_hours = document.querySelector('#hours') as HTMLBodyElement;
let show_minutes = document.querySelector('#minutes') as HTMLBodyElement;
let show_seconds = document.querySelector('#seconds') as HTMLBodyElement;
let show_date = document.querySelector('#date') as HTMLBodyElement;


// Error handling utility function for element selection
  function getElementByID(id:string):HTMLBodyElement {
       const element = document.querySelector(id) as HTMLBodyElement;

       if(!element){
          throw new Error("Element not found");
       }
           return element;
   }

// show date function
      const Calendar = ():void =>{

           try{

            let date  = new Date();

             type Cals = {
                    weekday: 'short' | 'long' | 'narrow';
                    month: 'short' | 'long' | 'numeric';
                    day: 'numeric' | '2-digit';
                    year: 'numeric' | '2-digit';
           };
           const calendar:Cals = {
             weekday: 'short',
             month: 'short',
            day: 'numeric',
            year: 'numeric'
        };

       const formattedDate = date.toLocaleDateString('en-US', calendar);
       show_date.innerText = formattedDate.toLocaleString();

   }catch(error){
     console.error("An Error Occured", error);
     }
  };

  const clock = ():void =>{

   try{
        Calendar();

    // show watch function
       const watch = ():void =>{

           try{

              let date =  new Date();
              let hours:number = date.getHours();
              let minutes:number = date.getMinutes();
              let seconds:number = date.getSeconds();

              show_hours.innerText = hours.toLocaleString();
              show_minutes.innerText = minutes.toLocaleString();
             show_seconds.innerText = seconds.toLocaleString();
           }catch(error){
                console.log("An error occured", error)
            }
         }

         setInterval(watch, 100)
       }catch(error){
          console.error(error);
       }
    }
     clock()

