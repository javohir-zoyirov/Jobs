import './jobcards.css';
import { data } from '../data';
import { useContext } from 'react';
import { ApiContext } from '../context';

export const JobCards = () => {
  const { value } = useContext(ApiContext);

  return (
    <div className="bg-tertiary p-2">
      <h1 className="text-black text-start">Recommended Jobs</h1>
      <div className="row m-2 gap-3">
        {data
          ?.filter(item => 
            value === '' || item.technology.some(res => res.toLowerCase().includes(value.toLowerCase()))
          )
          .map(item => (
            <div className="col-lg-4 border text-black rounded-4 p-1 m-0" key={item.id}>
              <div className="cardd p-0 m-0 rounded-4 p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="py-1 px-2 rounded-4 m-0 bg-white"> {item.date} May, 2023</p>
                  <span className="p-2 rounded-pill bg-white fw-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark fw-bold" viewBox="0 0 16 16">
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                    </svg>
                  </span>
                </div>
                <p className="text-start m-0 py-2 fw-bold">{item.company}</p>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <p className="p-0 m-0 fs-5 fw-bold w-50 text-start">{item.professia}</p>
                  <img className="rounded-pill" style={{ width: "30px", height: "30px" }} src={item.image} alt="#" />
                </div>
                <div className="d-flex gap-1 flex-wrap">
                  {item.technology.map((res, index) => (
                    <span key={index} style={{ border: '1px solid black' }} className="rounded-4 py-1 px-2 m-0">
                      {res}
                    </span>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center p-3 my-1">
                <div>
                  <p className="text-start m-0 text-black fw-bold">$ {item.salary}/hr</p>
                  <p className="m-0 text-black fw-bold">{item.country}</p>
                </div>
                <button type="button" className="bg-black text-white p-1 rounded-4 px-2 btn">
                  Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
