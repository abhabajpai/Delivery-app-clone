import { 
  MdGridView, 
  MdLocalCafe, 
  MdHome, 
  MdToys, 
  MdEco, 
  MdPhoneIphone, 
  MdFace, 
  MdCheckroom,
  MdFlashOn 
} from 'react-icons/md';

const categories = [
  { id: 'all', name: 'All', icon: MdGridView, active: true },
  { id: 'cafe', name: 'Cafe', icon: MdLocalCafe },
  { id: 'home', name: 'Home', icon: MdHome },
  { id: 'toys', name: 'Toys', icon: MdToys },
  { id: 'fresh', name: 'Fresh', icon: MdEco },
  { id: 'electronics', name: 'Electronics', icon: MdFlashOn },
  { id: 'mobiles', name: 'Mobiles', icon: MdPhoneIphone },
  { id: 'beauty', name: 'Beauty', icon: MdFace },
  { id: 'fashion', name: 'Fashion', icon: MdCheckroom },
];

const CategoryNavigation = () => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-[86px] z-10">
      <div className="_container">
        <div className="flex items-center space-x-8 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`flex flex-col items-center cursor-pointer min-w-fit group ${
                  category.active ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <div className={`p-2 rounded-full transition-colors ${
                  category.active ? 'bg-purple-100' : 'group-hover:bg-purple-50'
                }`}>
                  <IconComponent size={24} />
                </div>
                <span className={`text-sm font-medium mt-1 ${
                  category.active ? 'text-purple-600' : 'text-gray-700'
                }`}>
                  {category.name}
                </span>
                {category.active && (
                  <div className="w-full h-0.5 bg-purple-600 mt-1 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;
