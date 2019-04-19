.PHONY: update_price update_images

update_price:
	cat price_list.txt | xargs -n1 -P8 -I{} bash -c "curl -H 'Origin: https://poporing.life' https://api.poporing.life/get_latest_price/{} > data_pool/{}.json"
	node filter.js

update_images:
	cat image_list.txt | xargs -n1 -P8 -I{} bash -c "curl https://static.poporing.life/items/{}.png > images/{}.png"

missing_images:
	curl https://www.roguard.net/db/search/?search=zipper+bear+star+card | grep -oe '//[^;]*/img/icons/items/[^\.]*\.png' | uniq | xargs -n1 -I {} bash -c "curl https:{} > images/zipper_bear_star_card.png"