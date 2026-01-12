import React from "react";
import { Link } from "react-router";
const Resources = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th> <th>Name</th> <th>URL</th>{" "}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th> <td>Posha Ghor (Pet Care Hub)</td>
              <td>
                <Link
                  className="btn"
                  target="_blank"
                  to="https://poshaghor.com/"
                >
                  Visit
                </Link>
              </td>
            </tr>
            <tr>
              <th>2</th> <td>PetGo (Pet Services & Adoption)**</td>
              <td>
                <Link
                  className="btn"
                  target="_blank"
                  to="https://www.petgo.care/"
                >
                  Visit
                </Link>
              </td>
            </tr>
            <tr>
              <th>3</th> <td>MyPetsBD (Buy/Sell Pets Marketplace)</td>
              <td>
                <Link
                  className="btn"
                  target="_blank"
                  to="https://mypetsbd.com/"
                >
                  Visit
                </Link>
              </td>
            </tr>
            <tr>
              <th>4</th> <td>PetHomeBD (Adopt Pets)</td>
              <td>
                <Link
                  class="btn"
                  target="_blank"
                  to="https://pethomebd.com/"
                >
                  Visit
                </Link>
              </td>
            </tr>
            <tr>
              <th>5</th> <td>Hope Stray Animals Foundation</td>
              <td>
                <Link
                  className="btn"
                  target="_blank"
                  to="https://hopesafbd.org/"
                >
                  Visit
                </Link>
              </td>
            </tr>
            <tr>
              <th>6</th> <td>Alpha Animal Shelter (Dhaka)</td>
              <td>
                <Link
                  className="btn"
                  target="_blank"
                  to="https://alphaanimalshelter.com/"
                >
                  Visit
                </Link>
              </td>
            </tr>
            <tr>
              <th>7</th> <td>Bangladesh Pet Association</td>
              <td>
                <Link
                  className="btn"
                  target="_blank"
                  to="https://www.bangladeshpetassociation.com/"
                >
                  Visit
                </Link>
              </td>
            </tr>
            <tr>
              <th>8</th> <td>Biluibaba (Pet Adoption & Services)</td>
              <td>
                <Link
                  className="btn"
                  target="_blank"
                  to="https://www.biluibaba.com/adoptions"
                >
                  Visit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Resources;
