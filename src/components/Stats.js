import { CgHello } from "react-icons/cg"
import  {VscPerson}  from "react-icons/vsc"
const stats = [
    { id: 1, name: 'Children', value: '44', icon: <VscPerson size='32' color="#696BC2" /> },
    { id: 2, name: 'Abuse', value: '119', icon: <CgHello size='32' color="#696BC2" />},
    { id: 3, name: 'Cases', value: '46,000', icon: <CgHello size='40' color="#696BC2" /> },
    { id: 4, name: 'Resolved', value: '46,000', icon: <CgHello size='40' color="#696BC2" /> },
]

export default function Stats() {
    return (
        <div className="bg-dark py-24 sm:py-10 ">

            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <dt class="text-[#6C6573] font-medium py-2">Summary</dt>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4 ">
                    {stats.map((stat) => (
                        <div >
                            <div className="flex-auto w-64  rounded-lg border border-[#F2F2F4] bg-white p-5 shadow">
                              <div className=" m-5 w-fit bg-[#EDF2FE] rounded-xl p-1">{stat.icon}</div>  
                                <div  key={stat.id} className="mx-auto px-3  flex max-w-xs flex-col gap-y-2  justify-center ">
                                    <dt className="text-base leading-4 font-semibold  text-[#A5A1A7] ">{stat.name}</dt>
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
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">S/N</th>
                                    <th scope="col" class="px-6 py-3">Date</th>
                                    <th scope="col" class="px-6 py-3">Abuse Type</th>
                                    <th scope="col" class="px-6 py-3">Abuse ID</th>
                                    <th scope="col" class="px-6 py-3">Abuse Name</th>
                                    <th scope="col" class="px-6 py-3">Reporter</th>
                                    <th scope="col" class="px-6 py-3">Reported To</th>
                                    <th scope="col" class="px-6 py-3">Pending</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr class="bg-white dark:bg-gray-800">

                                    <td class="px-6 py-4">1</td>
                                    <td class="px-6 py-4">Malcolm Lockyer</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>


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
