#!/usr/bin/env bash
# Place in .platform/hooks/postdeploy directory
sudo certbot -n -d http://amaatmytravels.us-east-1.elasticbeanstalk.com/ --nginx --agree-tos --email aamaat99@gmail.com