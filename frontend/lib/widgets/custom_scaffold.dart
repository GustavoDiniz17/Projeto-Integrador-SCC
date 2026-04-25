import 'package:flutter/material.dart';
import 'package:projeto_integrador/widgets/custom_app_bar.dart';
import 'package:projeto_integrador/widgets/custom_loading_indicator.dart';

class CustomScaffold extends StatelessWidget {
  final bool loading;
  final Icon? appBarIcon;
  final Widget? appBarPageName;
  final PreferredSizeWidget? appBarBottom;
  final double? appBarHeight;
  final bool resizeToAvoidBottomInset;
  final Widget body;
  final List<Row>? persistentFooterButtons;
  final Widget? bottomNavigationBar;
  final GlobalKey<FormState>? formKey;
  final GlobalKey<ScaffoldState>? scaffoldKey;
  final Widget? drawer;
  final Widget? endDrawer;
  final List<Widget> appbarActions;
  final String loadingText;
  final bool endDrawerEnableOpenDragGesture;
  final bool? automaticallyImplyLeading;
  final Function(bool)? onEndDrawerChanged;

  const CustomScaffold({
    this.appBarIcon,
    this.appBarPageName,
    this.appBarBottom,
    this.appBarHeight,
    this.loading = false,
    this.resizeToAvoidBottomInset = false,
    this.drawer,
    this.endDrawer,
    this.body = const SizedBox.shrink(),
    this.persistentFooterButtons,
    this.bottomNavigationBar,
    this.formKey,
    this.scaffoldKey,
    this.appbarActions = const [],
    this.loadingText = '',
    this.endDrawerEnableOpenDragGesture = true,
    this.automaticallyImplyLeading,
    this.onEndDrawerChanged,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, snapshot) {
        return Form(
          key: formKey,
          child: Material(
            child: Stack(
              children: [
                Row(
                  children: [
                    snapshot.maxWidth <= 768
                        ? const SizedBox.shrink()
                        : drawer ?? const SizedBox.shrink(),
                    Expanded(
                      flex: 4,
                      child: Scaffold(
                        backgroundColor: Theme.of(
                          context,
                        ).colorScheme.surfaceContainerHighest,
                        key: scaffoldKey,
                        resizeToAvoidBottomInset: resizeToAvoidBottomInset,
                        appBar:
                            appBarIcon != null ||
                                appBarPageName != null ||
                                appBarBottom != null ||
                                appBarHeight != null
                            ? CustomAppBar(
                                pageIcon: appBarIcon,
                                pageName: appBarPageName ?? const Text(''),
                                bottom: appBarBottom,
                                toolbarHeight: appBarHeight,
                                actions: appbarActions,
                              )
                            : null,
                        drawer: snapshot.maxWidth <= 768 ? drawer : null,
                        body: body,
                        endDrawer: endDrawer,
                        persistentFooterButtons: persistentFooterButtons,
                        bottomNavigationBar: bottomNavigationBar,
                        endDrawerEnableOpenDragGesture:
                            endDrawerEnableOpenDragGesture,
                        onEndDrawerChanged: onEndDrawerChanged,
                      ),
                    ),
                  ],
                ),
                loading
                    ? Container(
                        color: const Color.fromARGB(120, 0, 0, 0),
                        width: double.infinity,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(10.0),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(16.0),
                                child: Row(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    const Padding(
                                      padding: EdgeInsets.all(8.0),
                                      child: CustomLoadingIndicator(),
                                    ),
                                    Flexible(
                                      child: loadingText != ''
                                          ? Padding(
                                              padding: const EdgeInsets.all(8),
                                              child: Text(loadingText),
                                            )
                                          : const SizedBox.shrink(),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      )
                    : const SizedBox.shrink(),
              ],
            ),
          ),
        );
      },
    );
  }
}
