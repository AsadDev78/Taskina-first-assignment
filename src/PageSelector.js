import React, { useState } from "react";
import "./PageSelector.css";
import CustomCheckbox from "./CustomCheckbox";


const PageSelector = () => {
  const pages = ["All pages", "Page 1", "Page 2", "Page 3", "Page 4"];
  const [selectedPages, setSelectedPages] = useState([]);

  const handleSelection = (page) => {
    if (page === "All pages") {
      if (selectedPages.includes("All pages")) {
        setSelectedPages([]);
      } else {
        setSelectedPages(pages);
      }
    } else {
      let updatedSelectedPages = [];
      if (selectedPages.includes(page)) {
        updatedSelectedPages = selectedPages.filter((p) => p !== page);
      } else {
        updatedSelectedPages = [...selectedPages, page];
      }

      if (updatedSelectedPages.length === pages.length - 1 && !updatedSelectedPages.includes("All pages")) {
        updatedSelectedPages = [...updatedSelectedPages, "All pages"];
      } else if (updatedSelectedPages.length === pages.length) {
        updatedSelectedPages = pages;
      } else {
        updatedSelectedPages = updatedSelectedPages.filter((p) => p !== "All pages");
      }

      setSelectedPages(updatedSelectedPages);
    }
  };

  return (
    <div className="page-selector">
      <ul>
        {pages.map((page, index) => (
          <React.Fragment key={index}>
            <li>
              <label className="spacing">
                <span>{page}</span>
                <CustomCheckbox
                  checked={selectedPages.includes(page)}
                  onChange={() => handleSelection(page)}
                />
              </label>
            </li>
            {page === "All pages" && <hr className="separator" />}
          </React.Fragment>
        ))}
      </ul>
      <hr className="separator" />
      <button className="done-button">Done</button>
    </div>
  );
};

export default PageSelector;
