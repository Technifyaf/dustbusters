const navitems = [
	{
		path: '/',
		label: 'Home',
	},
    {
		path: '/aboutus',
		label: 'About',
	},
	{
		path: '/services',
		label: 'Services',
	},
	
	
];
const Header = () => <div>
    <header>
        Header
    {navitems.map(({path,label},i)=>
     <ul>
         <a href = {path}>
             <li>{label}</li>
         </a>
     </ul>
     )}
    </header>
</div>;

export default Header;
