import React from "react";
import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { VscPerson } from "react-icons/vsc";
import { MdGppBad, MdPendingActions } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
export const Dashboard = ({ children, cases }) => {
    const stats = [
        
        {
          id: 2,
          name: "Pending",
          value: "119",
          icon: <MdGppBad size='24' color='#F93939' />,
        },
        {
          id: 3,
          name: "Cases",
          value: cases.length,
          icon: <MdPendingActions size='24' color='#FFCC00' />,
        },
        {
          id: 4,
          name: "Resolved",
          value: "46,000",
          icon: <HiOutlineDocumentReport size='24' color='green' />,
        },
      ];
  return (
    <Box>
      <Box pl='64' class='mx-auto max-w-7xl  sm:px-6 lg:px-8'>
      <div class='bg-primary py-24 sm:py-1 '>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 '>
        <dt class='text-[#6C6573] font-medium py-2'>Summary</dt>
        <dl className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 '>
         
        {stats.map((stat) => (
            <div>
              <div className='flex-auto w-52 flex align-center rounded-sm border border-[#F2F2F4] border-2 bg-white p-5 '>
                <div className=' h-fit w-fit bg-[#EDF2FE] rounded-xl p-1'>
                  {stat.icon}
                </div>
                <div
                  key={stat.id}
                  className='mx-3 flex max-w-xs flex-col gap-y-2 '>
                  <dt className='text-base leading-4 font-normal  text-[#A5A1A7] '>
                    {stat.name}
                  </dt>
                  <dd className='text-4xl font-semibold tracking-tight text-dark sm:text-2xl'>
                    {stat.value}
                  </dd>
                </div>
              </div>
            </div>
          ))}
        
        </dl>
        <div className='mt-10'>
          <dt class='text-[#6C6573] font-medium py-2'>Cases</dt>
          <div className=' rounded-lg border border-[#F2F2F4] h-40 w-full'>
            {/* <table class="relative overflow-x-auto">
                        <thead>
                            <tr>
                                <th className="bg-red ml-0">S/N</th>
                                <th>Date</th>
                                <th>Abuse ID</th>
                                <th>Abuse Type</th>
                                <th>Abuse Name</th>
                                <th>Reporter</th>
                                <th>Reported To</th>
                                <th>Pending</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bg-red">1</td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                                <td>1961</td>
                                <td>1961</td>
                                <td>1961</td>
                                <td>1961</td>
                                <td>1961</td>
                               
                            </tr>
                           
                        </tbody>
                    </table> */}

            <div class='relative overflow-x-auto'>
              <Table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <Thead class='text-xs text-[#6C6573]  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <Tr className='border-b  border-[#F3F3F3] bg-[#F9FBFC] '>
                    <Th scope='col' class='px-6 py-3 font-medium text-xs'>
                      S/N
                    </Th>
                    <Th scope='col' class='px-6 py-3 font-medium text-xs'>
                      User id
                    </Th>
                    <Th scope='col' class='px-6 py-3 font-medium text-xs'>
                      Case id
                    </Th>
                    <Th scope='col' class='px-6 py-3 font-medium text-xs'>
                      Name
                    </Th>
                    <Th scope='col' class='px-6 py-3 font-medium text-xs'>
                      Case Type
                    </Th>
                    <Th scope='col' class='px-6 py-3 font-medium text-xs'>
                      Time
                    </Th>
                    <Th scope='col' class='px-6 py-3 font-medium text-xs'>
                      Date
                    </Th>
                    <Th scope='col' class='px-6 py-3 font-medium text-xs'>
                      Location
                    </Th>
                    <Th scope='col' class='px-6 py-3 font-medium text-xs'>
                      Case Status
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                 
                      <Tr className='bg-white font-medium dark:bg-gray-800 border-b border-[#F3F3F3]'>
                        <Td class='px-6 py-4'></Td>
                        <Td class='px-6 py-4'></Td>
                        <Td class='px-6 py-4'></Td>
                        <Td class='px-6 py-4'></Td>
                        <Td class='px-6 py-4'></Td>
                        <Td class='px-6 py-4'></Td>
                        <Td class='px-6 py-4'></Td>
                        <Td class='px-6 py-4'></Td>

                        <Td  color='white' textAlign={'center'}  >dcsdmdvk</Td>
                      </Tr>
                      {/* bg={data.case_status === 'Pending' ? '#FFCC00' : data.case_status === 'Resolved' ? '#008000' : 'red'} */}
                </Tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div >

      </Box>
    </Box>
  );
};
