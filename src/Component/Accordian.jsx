import { useState } from "react";

const Accordian = () => {
  const flexDataArray = [
    {
      id: 1,
      title: "What is flexiple?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 2,
      title: "Should i Sign-up?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 3,
      title: "What is flexiple?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 4,
      title: "How long will it take?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 5,
      title: "not a fan of the?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
  ];
  const projectDataArray = [
    {
      id: 6,
      title: "What is flexiple?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 7,
      title: "Should i Sign-up?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 8,
      title: "What is flexiple?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 9,
      title: "How long will it take?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 10,
      title: "not a fan of the?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
  ];
  const paymentDataArray = [
    {
      id: 11,
      title: "What is flexiple?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 12,
      title: "Should i Sign-up?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 13,
      title: "What is flexiple?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 14,
      title: "How long will it take?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
    {
      id: 15,
      title: "not a fan of the?",
      data: "Flexiple is an exclusive community of full-time self-employed professionals as we assist top-tier independent professionals to.",
    },
  ];
  const [ids, setIds] = useState(null);
  const [ids1, setIds1] = useState(null);
  const [ids2, setIds2] = useState(null);

  const toggleBtn = (id) => {
    if (ids === id) {
      setIds(null);
    } else {
      setIds(id);
    }
  };

  const toggleBtn1 = (id) => {
    if (ids1 === id) {
      setIds1(null);
    } else {
      setIds1(id);
    }
  };
  
  const toggleBtn2 = (id) => {
    if (ids2 === id) {
      setIds2(null);
    } else {
      setIds2(id);
    }
  };

  return (
    <>
      <h2>Frequently Asked Questions</h2>
      <div className="faq_section">
        <div className="col-1">
          <h2>Flexiple & onboarding</h2>
          {flexDataArray?.map((item, index) => {
            return (
              <div className="accordian_tab" key={index}>
                <div
                  className="acc_tab_header"
                  onClick={() => toggleBtn(item.id)}
                >
                  <span className="text-props">{item.title}</span>
                  <span>
                    <i
                      className={
                        item.id === ids
                          ? "fa fa-angle-up"
                          : "fa fa-angle-up animation"
                      }
                    ></i>
                  </span>
                </div>
                <div
                  className="tab_data"
                  id="data_t"
                  style={{ display: item.id === ids ? "block" : "none" }}
                >
                  {item.data}
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-1">
          <h2>Type of projects</h2>
          {projectDataArray?.map((item, index) => {
            return (
              <div className="accordian_tab" key={index}>
                <div className="acc_tab_header"  onClick={() => toggleBtn1(item.id)}>
                  <span className="text-props">{item.title}</span>
                  <span>
                    <i
                      className={
                        item.id === ids1
                          ? "fa fa-angle-up"
                          : "fa fa-angle-up animation"
                      }
                    ></i>
                  </span>
                </div>
                <div className="tab_data" style={{ display: item.id === ids1 ? "block" : "none" }}>
                  {item.data}
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-1">
          <h2>Payments</h2>
          {paymentDataArray?.map((item, index) => {
            return (
              <div className="accordian_tab" key={index}>
                <div className="acc_tab_header"  onClick={() => toggleBtn2(item.id)}>
                  <span className="text-props">{item.title}</span>
                  <span>
                    <i
                      className={
                        item.id === ids2
                          ? "fa fa-angle-up"
                          : "fa fa-angle-up animation"
                      }
                    ></i>
                  </span>
                </div>
                <div className="tab_data" style={{ display: item.id === ids2 ? "block" : "none" }}>
                  {item.data}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accordian;
