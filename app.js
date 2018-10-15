_dev_ = true;

$app = __({ el: 'app' });

$tmp_home = new GarudaTemplate({
	id : 'tmp_home'
});

$tmp_contact = new GarudaTemplate({
	id : 'tmp_contact'
});

var AppRoute = new GarudaRoute()
				   .to($app)
				   .default('home')
				   .before('Please Wait..')
				   .nothing('404')
				   .register([
				   		{
				   			route : 'home',
				   			response : $tmp_home
				   		},
				   		{
				   			route : 'profile',
				   			response : function(){
				   				$ambil_data = __({
				   					url : 'data.ini'
				   				}).request($response => {
				   					$app.setHtml($response);	
				   				});
				   			}
				   		},
				   		{
				   			route : 'about',
				   			response : function(){
				   				return 'About'
				   			}
				   		},
				   		{
				   			route : 'contact',
				   			response : $tmp_contact
				   		}
				   ]);

function __GarudaRoute(){
	return AppRoute;
}