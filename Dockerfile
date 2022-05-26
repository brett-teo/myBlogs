FROM python:3.9.0b5-alpine3.11 as runtime
LABEL "repository"="https://github.com/elgohr/ecr-login-action"
LABEL "maintainer"="Lars Gohr"

RUN pip install awscli
RUN apk add --no-cache bash jq

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
