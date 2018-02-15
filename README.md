# LGBT Safety App [![Build Status](https://travis-ci.org/voxsar/lgbtsafetyapp.svg?branch=master)](https://travis-ci.org/voxsar/lgbtsafetyapp) [![Build status](https://ci.appveyor.com/api/projects/status/k0iaelrl8684mj4g/branch/master?svg=true)](https://ci.appveyor.com/project/voxsar/lgbtsafetyapp/branch/master) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
## tl;dr
App that is inspired by yelp!, yamu or other rating services, except this app rates places, people and services that are safe and non discriminatory  towards LGBTQ+ communities and other discriminated minorities

## Description
Created specifically for use in Sri Lanka, but can be used in other locales as well, it is designed to be all inclusive hub of safety for people of difference and discriminated minorities

Ideally Sri Lanka or any country should accept all it's citizens as part of their sovern nation, that is how it shows it's strength by valuing everyone no matter who they are; but till that day arrives we must survive with relative peace, the aim of this app is to help provide that temporary peace of mind

## Getting Started
### mahhala
The meaning of mahhala is freedom from the zulu language, in here the meaning is the *same* to provide or give the freedom and peace which all people deserve and are entitled to

Start by cloning to your PC, once done cd into directory and init the git (optional), this project will clone the entire directory including the cordova project and the builds
branches may also clone unless specified

```
git clone https://github.com/voxsar/lgbtsafetyapp.git
cd lgbtsafetyapp
git init
```

This application starts of as a concept design that follows a evolutionary prototyping model to continiously improve the existing design, currently the app is in v0.x.y where the x increments are for major improvements and features

This application runs on the framework7 ui framework to create interfaces based on the UI philosphy of Google's Material and Apple's iPhoneX themes

The possibilities are endless.

### Building the Application

Travis CI and Appveyor have been used to continously build the master and release branches, hot fixes may be build based on commit message triggers as following

```
hotfix-ci
```

You may also add the following platforms to cordova to prepare the builds for specific platforms
For development testing and quick run use the browser, works best with browser reload plugin
```
cd mahhala
cordova platform add browser
cordova plugin add cordova-plugin-browsersync
```
For device testing

```
cd mahhala
cordova platform add android
cordova platform add windows
cordova platform add ios
```

For running the application on the browser, you must use the run command, if the browser sync is not added this use

```
cordova run browser
```

if browser sync is present then use this
```
cordova run -- --live-reload
```

### Deploying

Travis CI and Appveyor currently push the native android apps and windows mobile universal apps, however ios app requires a developer license that is not yet acquired and may not be acquired as such any contributor can used their developer license to build and release on behalf of the community *invitation*
You may also use the cordova commands to build your application as shown below
#### Android Unsigned APK Build

```
cd mahhala
cordova build android
```

#### Windows Unsigned APK Build

```
cd mahhala
cordova build appx-uwa
```

#### IOS Unsigned APK Build

```
cd mahhala
cordova build ios
```

## Contributing

Currently anyone can request to collaborate and contribute to the project including feature requests, code contribution, their developer license to build the ios port