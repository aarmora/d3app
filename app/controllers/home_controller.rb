class HomeController < ApplicationController
	def index
		@response = HTTParty.get('https://us.api.battle.net/d3/profile/melayish%231811/?locale=en_US&apikey=' + ENV['BNET_WEB_API_KEY'])
	end

	def getJson		
		battle_tag = URI.encode(params[:battle_tag])
		@account = HTTParty.get('https://us.api.battle.net/d3/profile/' + battle_tag + '/?locale=en_US&apikey=' + ENV['BNET_WEB_API_KEY'])

		render :json => @account
	end

	def getHero
		battle_tag = URI.encode(params[:battle_tag_name] + "#" + params[:battle_tag_number])

		@hero = HTTParty.get('https://us.api.battle.net/d3/profile/' + battle_tag + '/hero/'+ params[:hero_id] +'?locale=en_US&apikey=' + ENV['BNET_WEB_API_KEY'])

		render :json => @hero
	end
end
