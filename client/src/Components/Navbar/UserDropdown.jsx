import { Menu } from '@headlessui/react';
import {FaUserAlt} from 'react-icons/fa';

function UserDropdown() {
    return (
        <Menu>
            <Menu.Button>
                <span className="border p-2 border-gray-500 text-zomato-300 rounded-full">
                    <FaUserAlt />
                </span>
            </Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    <button>Sign In</button>
                </Menu.Item>
                <Menu.Item>
                    <button>Sign Up</button>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
};

export default UserDropdown;