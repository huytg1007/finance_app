import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../Api/api";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Sidebar from "../../Components/SideBar/SideBar";
import Tile from "../../Components/Tile/Tile";
import CompFinder from "../../Components/CompFinder/CompFinder";
import TenKFinder from "../../Components/TenkFinder/TenKFinder";
import Spinner from "../../Components/Spinner/Spinner";



interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, [ticker]);

  return (
    <>
      {company ? (
       <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
        <Sidebar/>
        <CompanyDashboard ticker={ticker!}>

        <Tile title="Company Name" subTitle={company.companyName} />
        <Tile title="Price" subTitle={company.price.toString()} />
        <Tile title="Price" subTitle={"$" + company.price.toString()} />
        <Tile title="DCF" subTitle={"$" + company.dcf.toString()} />
        
        <CompFinder ticker={company.symbol} />
        <TenKFinder ticker={company.symbol} />

        <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
          {company.description}
        </p>
        
        </CompanyDashboard>

     </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;