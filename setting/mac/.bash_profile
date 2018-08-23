export ANDROID_HOME=~/Library/Android/sdk
#export ANDROID_HOME=~/android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
#export PATH=${PATH}:${ANDROID_HOME}/ndk-bundle
export NDK_HOME=~/android/android-ndk-r14b
export PATH=${PATH}:${NDK_HOME}

# Setting PATH for Python 3.6
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.6/bin:${PATH}"
export PATH

export GRADLE_HOME=~/android/Android\ Studio.app/Contents/gradle/gradle-4.4
export PATH=${PATH}:${GRADLE_HOME}/bin

export MELD_HOME=~/tools/Meld.app/Contents/MacOS
export PATH=${PATH}:${MELD_HOME}

export MAVEN_HOME=~/tools/apache-maven-3.5.3
export PATH=${PATH}:${MAVEN_HOME}/bin

export CMD_HOME=~/test/cmd/online
export PATH=${PATH}:${CMD_HOME}

