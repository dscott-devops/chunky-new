import React, { useState, useEffect }from 'react'
import "./TeamLinks.css"
import axios from "axios"
import TeamLink from "./TeamLink"

const client = axios.create({
  baseURL: "https://chunkysports.com/api/v1",
});

const TeamLinks = (props) => {
  const [sources,setSources] = useState([])
  const getSub = (subcategory) => {
    console.log("CommentID", subcategory)
    return sources
      .filter((source) => source.attributes.subcategory === subcategory)
      .sort(
        (a, b) =>
          a.attributes.subcategory - b.attributes.subcategory
      );
  };

  const setMLB = () =>{

    return (
      <>

      <div class="container mx-auto">
<div className="tlink-league-name"><center><h1>Major League Baseball (MLB)</h1></center></div>
       <div className='tlink-division'><center><h2>American League</h2></center></div>
  <div class="grid grid-cols-3 gap-6">
    <div>
    <div className="tlink-name">East</div>
       {getSub("AL East").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }

    </div>
    <div>
    <div className="tlink-name">Central</div>
       {getSub("AL Central").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }

    </div>
    <div>
    <div className="tlink-name">West</div>
       {getSub("AL West").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }
      
      </div>   
  </div>
</div>

<div class="container mx-auto">
<div className='tlink-division'><center><h2>National League</h2></center></div>
  <div class="grid grid-cols-3 gap-6">
    <div>
    <div className="tlink-name">East</div>
       {getSub("NL East").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }

    </div>
    <div>
    <div className="tlink-name">Central</div>
       {getSub("NL Central").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }

    </div>
    <div>
    <div className="tlink-name">West</div>
       {getSub("NL West").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }
      
      </div>   
  </div>
</div>
</>



    );

  }

  
  const setNBA = () =>{

    return (
      <>

      <div class="container mx-auto">
<div className="tlink-league-name"><center><h1>National Basketball Association (NBA)</h1></center></div>
       <div className='tlink-division'><center><h2>Eastern</h2></center></div>
  <div class="grid grid-cols-3 gap-6">
    <div>
    <div className="tlink-name">Atlantic</div>
       {getSub("Atlantic Division").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }

    </div>
    <div>
    <div className="tlink-name">Central</div>
       {getSub("Central Division").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }

    </div>
    <div>
    <div className="tlink-name">South East</div>
       {getSub("Southeast Division").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }
      
      </div>   
  </div>
</div>

<div class="container mx-auto">
<div className="tlink-league-name"><h1>NBA</h1></div>
<div className='tlink-division'><center><h2>Western</h2></center></div>
  <div class="grid grid-cols-3 gap-6">
    <div>
    <div className="tlink-name">Northwest</div>
       {getSub("Northwest Division").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }

    </div>
    <div>
    <div className="tlink-name">Pacific</div>
       {getSub("Pacific Division").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }

    </div>
    <div>
    <div className="tlink-name">South West</div>
       {getSub("Southwest Division").map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }
      
      </div>   
  </div>
</div>
</>



    );

  }

const setNFL = () =>{
  return (
    <>
    <div class="container mx-auto">
      <div className="tlink-league-name"><center><h1>National Football League (NFL)</h1></center></div>
      <div className='tlink-division'><center><h2>NFC</h2></center></div>
    <div class="grid grid-cols-4 gap-6">
    <div>
    <div className="tlink-name">NFC East</div>
  {getSub("NFC East").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }
  </div>

  <div>
  <div className="tlink-name">NFC South</div>
  {getSub("NFC South").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }

  </div>
  <div>
  <div className="tlink-name">NFC North</div>
  {getSub("NFC North").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }


  </div>
  <div> 
  <div className="tlink-name">NFC West</div>
     {getSub("NFC West").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }</div>
 </div>
  </div>

<div class="container mx-auto">
<div className='tlink-division'><center><h2>AFC</h2></center></div>
    <div class="grid grid-cols-4 gap-6">
  <div>
    <div className="tlink-name">AFC East</div>
  {getSub("AFC East").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }
  </div>

  <div>
  <div className="tlink-name">AFC South</div>
  {getSub("AFC South").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }

  </div>
  <div>
  <div className="tlink-name">AFC North</div>
  {getSub("AFC North").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }


  </div>
  <div> 
  <div className="tlink-name">AFC West</div>
     {getSub("AFC West").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }</div>
</div>
</div>
</>

  );
}

const setNHL = () =>{
  return (
    <>
    <div class="container mx-auto">
      <div className="tlink-league-name"><center><h1>National Hockey League (NHL)</h1></center></div>
     <div class="grid grid-cols-4 gap-6">
    <div>
    <div className="tlink-name">Atlantic Division</div>
  {getSub("Atlantic").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }
  </div>

  <div>
  <div className="tlink-name">Metroplitan Division</div>
  {getSub("Metropolitan").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }

  </div>
  <div>
  <div className="tlink-name">Central</div>
  {getSub("Central NHL").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }


  </div>
  <div> 
  <div className="tlink-name">Pacific Division</div>
     {getSub("Pacific").map((post) => (
      <TeamLink
        key={post.id}
        id={post.id}
        category={post.attributes.category}
        username={post.attributes.username}
        first_name={post.attributes.first_name}
        last_name={post.attributes.last_name}
        subcategory={post.attributes.subcategory}        

      />
    ))
    }</div>
   </div>
 </div>


</>

  );
}

  
  useEffect(() => {
    
    async function getSources() {
      const response = await client.get("/sourcenames");
      setSources(response.data.data);
      console.log("Reponse Data", response);
    }

    getSources();
  }, []);

  



  return (
<div className="">
    {props.league == "NFL" &&
    
    setNFL()}

  {props.league == "NBA" &&
    
    setNBA()}

{props.league == "NHL" &&
    
    setNHL()}

{props.league == "MLB" &&
    
    setMLB()}



    </div>
  );
}

export default TeamLinks