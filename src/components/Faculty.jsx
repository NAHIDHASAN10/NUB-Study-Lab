import Footer from "./Footer";
import Navbar from "./Navbar";

const Faculty = () => {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          Faculty Information
        </h1>
        <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6'>
          {/* Image Section */}
          <div className='flex-shrink-0'>
            <img
              src='https://nub.ac.bd/assets/images/pims/Syed%20Shahir%20Ahmed%20Rakin.jpg'
              alt='Syed Shahir Ahmed Rakin'
              className='rounded-lg w-48 h-48 object-cover'
            />
          </div>

          {/* Information Section */}
          <div className='md:ml-8 mt-6 md:mt-0'>
            <h2 className='text-2xl font-bold mb-4'>Syed Shahir Ahmed Rakin</h2>
            <div className='mb-4'>
              <p>
                <strong>Designation:</strong> Lecturer
              </p>
              <p>
                <strong>Department:</strong> Computer Science & Engineering
              </p>
            </div>
            <div className='mb-4'>
              <h3 className='font-bold'>Academic Qualification:</h3>
              <p>
                <strong>Post-Graduation (M.Sc.in CSE:NSU)</strong>
              </p>
              <p className='mt-2'>
                <strong>Graduation (B.Sc.in CSE:NSU)</strong>
              </p>
            </div>
            {/* <div className="mb-4">
              <h3 className="font-bold">Publications:</h3>
              <p>
                Publication: Hindawi Scientific Programming Volume 2022, Article ID 4194874, 16 pages<br />
                <a
                  href="https://doi.org/10.1155/2022/4194874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  DOI: https://doi.org/10.1155/2022/4194874
                </a>
              </p>
            </div> */}
            <div className='mb-4'>
              <p>
                <strong>Mobile:</strong> 01907245701
              </p>
              <p>
                <strong>E-mail:</strong>{" "}
                <a
                  href='mailto:rakin@nub.ac.bd'
                  className='text-blue-500 underline'
                >
                  jishan151297@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faculty;
