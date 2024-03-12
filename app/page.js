import Navbar from './componets/navbar';
import C_classSedan from './componets/c_classSedan';
import EClassSedan from './componets/eClassSedan';
import EclassWagon from './componets/e_classWagon';
import EQS_sedan from './componets/eqs_sedan';
import Maybach_sedan from './componets/maybach_sedan';

const Page = () => {

  return (
    <div>
        <Navbar />
        <C_classSedan />
        <EClassSedan />
        <EclassWagon />
        <EQS_sedan />
        <Maybach_sedan />
    </div>
  );
};

export default Page;

