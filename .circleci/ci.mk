AWS_REGION := ap-northeast-1

login:
	aws configure set region $(AWS_REGION)
	aws configure set aws_access_key_id $$AWS_ACCESS_KEY_ID
	aws configure set aws_secret_access_key $$AWS_SECRET_ACCESS_KEY
	$$(aws ecr get-login --no-include-email --registry-ids $(ECS_ID) --region $(AWS_REGION))

deploy:
	aws s3 sync dist/ s3://ca-2019-wfc/ --acl public-read