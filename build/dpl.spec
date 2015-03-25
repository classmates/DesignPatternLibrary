%define __os_install_post %{nil}
AutoReqProv: no

Name:       dpl
Version:    ${version}
Release:    1
Epoch:      1
Summary:    rpm for dpl
Group:	    Classmates Applications
License:    Classmates
Source0:    %{name}-%{version}.tar.gz
AutoReq:    0

BuildRoot:  %{_tmppath}/%{name}-%{version}/
BuildArch: noarch

Requires:  cm-logarchive
Requires:  nodejs

%define dpl_dir /var/www/html
%description
Ember-cli application for siteui.


%prep
%setup -q -n %{name}-%{version}

%build


%install
rm -rf %{buildroot}
%{__install} -dm 755 %{buildroot}%{dpl_dir}
%{__cp} -a * %{buildroot}%{dpl_dir}


%clean
rm -rf %{buildroot}


%files
%defattr(-,root,root,-)
%attr(0755,cmates,cmates) %{dpl_dir}


%changelog

