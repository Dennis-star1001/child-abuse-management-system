import { CgHello } from "react-icons/cg"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { MdGppBad, MdPendingActions } from "react-icons/md"
import { VscPerson } from "react-icons/vsc"
// FF0000
const stats = [
    { id: 1, name: 'Children', value: '44', icon: <VscPerson size='24' color="#696BC2" /> },
    { id: 2, name: 'Abuse', value: '119', icon: <MdGppBad size='24' color="#F93939" /> },
    { id: 3, name: 'Cases', value: '46,000', icon: <MdPendingActions size='24' color="#FFCC00" /> },
    { id: 4, name: 'Resolved', value: '46,000', icon: <HiOutlineDocumentReport size='24' color="green" /> },
]

export default function Stats() {
    return (
        <div className="bg-dark py-24 sm:py-1 ">

            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <dt class="text-[#6C6573] font-medium py-2">Summary</dt>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4 ">
                    {stats.map((stat) => (
                        <div >
                            <div className="flex-auto w-52 flex align-center rounded-sm border border-[#F2F2F4] bg-white p-5 shadow">
                                <div className=" h-fit w-fit bg-[#EDF2FE] rounded-xl p-1">{stat.icon}</div>
                                <div key={stat.id} className="mx-3 flex max-w-xs flex-col gap-y-2 ">
                                  
                                    <dt className="text-base leading-4 font-normal  text-[#A5A1A7] ">{stat.name}</dt>
                                    <dd className="text-4xl font-semibold tracking-tight text-dark sm:text-2xl">
                                        {stat.value}
                                    </dd>
                                </div>
                            </div>
                        </div>
                    ))}
                </dl>
                <div className="mt-10">
                    <dt class="text-[#6C6573] font-medium py-2">Abuse Cases</dt>
                    <div className=" rounded-lg border border-[#F2F2F4] h-40 w-full">
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

                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-[#6C6573]  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className="border-b  border-[#F3F3F3] bg-[#F9FBFC] ">
                                        <th scope="col" class="px-6 py-3 font-medium text-xs">S/N</th>
                                        <th scope="col" class="px-6 py-3 font-medium text-xs">Date</th>
                                        <th scope="col" class="px-6 py-3 font-medium text-xs">Abuse Type</th>
                                        <th scope="col" class="px-6 py-3 font-medium text-xs">Abuse ID</th>
                                        <th scope="col" class="px-6 py-3 font-medium text-xs">Abuse Name</th>
                                        <th scope="col" class="px-6 py-3 font-medium text-xs">Reporter</th>
                                        <th scope="col" class="px-6 py-3 font-medium text-xs">Reported To</th>
                                        <th scope="col" class="px-6 py-3 font-medium text-xs">Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="bg-white font-medium dark:bg-gray-800 border-b border-[#F3F3F3]">

                                        <td class="px-6 py-4">1</td>
                                        <td class="px-6 py-4">Malcolm Lockyer</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">Solved</td>


                                    </tr>
                                    <tr class="font-medium bg-white dark:bg-gray-800 border-b border-[#F3F3F3]">

                                        <td class="px-6 py-4">2</td>
                                        <td class="px-6 py-4">Malcolm Lockyer</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">Pending</td>


                                    </tr>
                                    <tr class="font-medium bg-white dark:bg-gray-800 border-b border-[#F3F3F3]">

                                        <td class="px-6 py-4">3</td>
                                        <td class="px-6 py-4">Malcolm Lockyer</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">1961</td>
                                        <td class="px-6 py-4">Pending</td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
