import { useState } from 'react';
import Button from '../components/buttons/Button';
import MasterDetail from '../components/containers/MasterDetail';
import View from '../components/containers/View';
import ButtonDemo from './ButtonDemo';
import GlobalStyle from './globalStyle';
import ListDemo from './ListDemo';
import OthersDemo from './OthersDemo';
import InputsDemo from './InputsDemo';

const Demo = () => {
	const [collapseMaster, setCollapseMaster] = useState(false);


	const containers = (
		<div>
			<h1>AAAStyle demo</h1>
		</div>
	);


	return (
		<>
			<GlobalStyle />
			<View>
				<MasterDetail
					collapsed={collapseMaster}
					header={<h2>AAAStyle</h2>}
					footer={<Button onClick={() => setCollapseMaster(!collapseMaster)} variant='text'>{'Reduce'}</Button>}
					children={[
						{
							title: <h3>Presentation</h3>,
							items: [{ title: 'Presentation', content: containers }],
						},
						{
							title: <h3>Components</h3>,
							items: [
								{ title: 'List', content: ListDemo },
								{ title: 'Buttons', content: ButtonDemo },
								{ title: 'Others', content: OthersDemo },
								{ title: 'Inputs', content: InputsDemo },
							],
						},
						{
							title: <h3>Exemples sidebar</h3>,
							items: [
								{ title: 'Exemple 1', content: 'EXEMPLE 1' },
								{ title: 'Exemple 2', content: 'EXEMPLE 2' },
							],
						},
					]}
				/>
			</View>
		</>
	);
};

export default Demo;
