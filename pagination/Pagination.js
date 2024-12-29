import React, { useEffect, useState } from 'react';

export const Test = () => {
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)

  useEffect(() => {
    const fetchingDetails = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products?limit=100`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        console.log("11: Response Object:", res);
        const response = await res.json();
        const {products}=response|| []
        setData(products)
        console.log("22: Parsed response:", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchingDetails();
  }, []);
  console.log("33:", data);

  return (
    <>
    <div>Testing starts from here</div>
    <div style={{display:'flex',gap:'20px',flexWrap: 'wrap'}}>
        {data && data.slice(page*10-10,page*10).map((x)=>{
           return (
            <div style={{display:'flex',width:'200px',flexDirection:'column',border:'2px solid black',padding:'20px'}}>
                {/* <h1>{x?.id}</h1> */}
                <h2>{x?.title}</h2>
                <h6>{x?.description}</h6>
                <img src={x?.images} alt={x?.title}/>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <h4>${x?.price}</h4>
                    <h4>rating:{x?.rating}</h4>

                </div>


                </div>
           )
        })}
    </div>
    {data.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            style={{
              padding: '10px 15px',
              margin: '0 5px',
              cursor: page === 1 ? 'not-allowed' : 'pointer',
            }}
          >
            Back
          </button>

          {[...Array(Math.ceil(data.length / 10))].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              style={{
                padding: '10px 15px',
                margin: '0 5px',
                backgroundColor: page === i + 1 ? 'blue' : 'white',
                color: page === i + 1 ? 'white' : 'black',
                cursor: 'pointer',
                border: '1px solid black',
              }}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === Math.ceil(data.length / 10)}
            onClick={() => setPage((prev) => prev + 1)}
            style={{
              padding: '10px 15px',
              margin: '0 5px',
              cursor:
                page === Math.ceil(data.length / 10) ? 'not-allowed' : 'pointer',
            }}
          >
            Next
          </button>
        </div>
      )}
    </>

  );
};
