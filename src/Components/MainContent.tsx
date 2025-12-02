

const MainContent = () => {
    return (
        <div className='flex justify-between'>
           
            <div className='mt-40'>
              <div className='font-bold text-3xl text-gray-700'>
                <h3>what's different about <br></br>Manage?</h3>
              </div>
              <div className='mt-10 text-gray-500'>
                <p>Manage provides all the functionality your <br></br>team needs, without the complexity. Our <br></br> software is tailor-made for modern digital <br></br> product teams.</p>
              </div>
            </div>

           
            <div className='mt-40'>
                <div className='flex gap-6'>
                    <div className='bg-orange-500 text-white font-semibold w-16 h-12 px-5 py-3 rounded-l-full rounded-r-full' > 01 </div>
                    <div>
                        <h3 className='font-bold text-gray-700'>Track company-wide progress</h3>
                        <p className='text-gray-500 mt-6 '>See how your day-to-day tasks fit into the wider vision.<br></br> Go from tracking progress at the milestone level all the <br></br> way done to the smallest of details. Never lose sight of <br></br>the bigger picture again.</p>
                    </div>
                </div>

                <div className='flex gap-6 mt-10'>
                    <div className='bg-orange-500 text-white font-semibold w-16 h-12 px-5 py-3 rounded-l-full rounded-r-full'> 02 </div>
                    <div>
                        <h3 className='font-bold text-gray-700'>Advanced built-in reports</h3>
                        <p className='text-gray-500 mt-6 '> Set internal delivery estimates and track progress toward <br></br>company goals. Our customisable dashboard helps you <br></br> build out the reports you need to keep key stakeholders <br></br> informed.</p>
                    </div>
                </div>

                <div className='flex gap-6 mt-10'>
                    <div className='bg-orange-500 text-white font-semibold w-16 h-12 px-5 py-3 rounded-l-full rounded-r-full'> 03 </div>
                    <div>
                        <h3 className='font-bold text-gray-700'> Everything you need in one place</h3>
                        < p className='text-gray-500 mt-6 '>Stop jumping from one service to another to <br></br> communicate, store files, track tasks and share <br></br> documents. Manage offers an all-in-one team <br></br> productivity solution.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MainContent;