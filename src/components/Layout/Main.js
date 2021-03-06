import React from 'react'
import Grid from '@material-ui/core/Grid'
import Header from './Header'
import StickyFooter from 'react-sticky-footer';


const Main = ({ children }) => (
	<div>
		<Header />
		<Grid container justify="center">
			<Grid item xs={12} sm={6} style={{ marginTop: 30 }}>
				{children}
			</Grid>
		</Grid>
		<StickyFooter
    bottomThreshold={50}
    normalStyles={{
	backgroundColor: "#008abe",
	color: "white",
	justifyContent: 'space-between',
	padding: "2rem",
	marginTop: 20
    }}
   
>

    Made with ❤ by Anna
	
</StickyFooter>

	</div>
)

export default Main