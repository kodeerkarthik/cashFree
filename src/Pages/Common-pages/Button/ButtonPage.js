import { Button } from 'antd';
import 'antd/dist/antd.css';
import { PoweroffOutlined } from '@ant-design/icons';
import './ButtonPage.css';

function ButtonPage (props) {
	return(
		<div> 
			<Button 
				type="primary" 
				size={props.size}
				loading={props.load?props.load:false}
				icon={props.icon?<PoweroffOutlined/>:''}
				disabled={props.disable?true:false}
			>
				{props.title}
			</Button>
		</div>
	);
}


export default ButtonPage;