%define __os_install_post %{nil}
AutoReqProv: no

Name:       uiarchitecturebb
Version:    ${version}
Release:    1
Epoch:      1
Summary:    rpm for uiarchitecturebb
Group:	    Classmates Applications
License:    Classmates
Source0:    %{name}-%{version}.tar.gz
AutoReq:    0

BuildRoot:  %{_tmppath}/%{name}-%{version}/
BuildArch: noarch

Requires:  cm-logarchive
Requires:  nodejs

%define uiarchitecturebb_dir /var/www/uiarchitecturebb
%description
Bootstrap build and documentation for DPL.


%prep
%setup -q -n %{name}-%{version}

%build


%install
rm -rf %{buildroot}
%{__install} -dm 755 %{buildroot}%{uiarchitecturebb_dir}
%{__cp} -a * %{buildroot}%{uiarchitecturebb_dir}


%clean
rm -rf %{buildroot}


%files
%defattr(-,root,root,-)
%attr(0755,cmates,cmates) %{uiarchitecturebb_dir}


%changelog

