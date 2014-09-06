class HomeController < ApplicationController
	def index
		@response = HTTParty.get('https://us.api.battle.net/d3/profile/melayish%231811/?locale=en_US&apikey=4dahhwwp6tt6pzsn52ctjawkqkqynhe7')
	end

	def getJson		
		battle_tag = URI.encode(params[:battle_tag])
		@account = HTTParty.get('https://us.api.battle.net/d3/profile/' + battle_tag + '/?locale=en_US&apikey=4dahhwwp6tt6pzsn52ctjawkqkqynhe7')

		render :json => @account
	end
end
