import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaShopify, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlineSettingsPhone } from "react-icons/md";
import UseAuth from "../../../../hooks/useAuth";
import useMenu from "../../../../hooks/useMenu";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../hooks/useAxiosSecure";
import { LuWallet } from "react-icons/lu";
import { SiCodechef } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','red'];

const AdminHome = () => {
    const {user} = UseAuth();
    const [menu] = useMenu();
    const axiosSecure = UseAxiosSecure();

    const {data: stats = {}, refetch} = useQuery({
      queryKey: ['admin-stats'],
      queryFn: async()=>{
        const res = await axiosSecure.get('/admin-stats');
        return res.data;
      }
    })
   
    const {data: chartdata=[]} = useQuery({
      queryKey:['order-stats'],
      queryFn: async()=>{
        const res = await axiosSecure.get('/order-stats');
        return res.data;
      }
    })

    //custom shape for the bar chart
    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    //custom shape for the pie chart
    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const piechartdata = chartdata.map(data=>{
  return {name: data.category, value: data.revenue}
})
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Admin Home</title>
      </Helmet>
      <div className="w-full mx-auto">
        {/* Welcome Section */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold">Hi,<span className="uppercase text-orange-500 pr-2">{user?.displayName}</span> Welcome Back!</h2>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Total Orders */}
          <div className="flex justify-center items-center bg-indigo-700 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-white mr-4">
            <LuWallet />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">$ {stats?.revenue}</div>
              <div className="text-sm text-white">Revenue</div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-center items-center bg-orange-700 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-white mr-4">
            <FaUsers />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats?.users}</div>
              <div className="text-sm text-gray-600 text-white">Customers</div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-center items-center bg-green-700 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-white mr-4">
            <SiCodechef />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats?.menus}</div>
              <div className="text-sm text-white">Products</div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-center items-center bg-cyan-700 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-white mr-4">
            <CiDeliveryTruck />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats?.orders}</div>
              <div className="text-sm text-white">Orders</div>
            </div>
          </div>

       
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-5">
          {/* Profile Picture and Name */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow w-full">
          <BarChart
      width={500}
      height={300}
      data={chartdata}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" className="capitalize"/>
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartdata.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
          </div>

          {/* User Dashboard Section */}
          <div className="bg-gray-50 rounded-lg p-6 shadow w-full">
          <PieChart width={400} height={400}>
          <Pie
            data={piechartdata}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {piechartdata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend className="capitalize"></Legend>
        </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
